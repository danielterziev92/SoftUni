const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const host = 'http://localhost:3000'; // Application host (NOT service host - that can be anything)

const DEBUG = false;
const slowMo = 500;

const mockData = {
  list: [
    {
      title: 'Bug 1',
      type: 'Short',
      description: 'My first course 1',
      teacher: 'Teacher1',
      _id: '1001',
    },
    {
      title: 'Bug 2',
      type: 'Medium',
      description: 'My first course 2',
      teacher: 'Teacher2',
      _id: '1002',
    },
    {
      title: 'Bug 3',
      type: 'Long',
      description: 'My first course 3',
      teacher: 'Teacher3',
      _id: '1003',
    },
    {
      title: 'Bug 4',
      type: 'Short',
      description: 'My first course 4',
      teacher: 'Teacher4',
      _id: '1004',
    },
  ],
};

const endpoints = {
  catalog: '/jsonstore/tasks',
  byId: (id) => `/jsonstore/tasks/${id}`,
};

let browser;
let context;
let page;

describe('E2E tests', function () {
  // Setup
  this.timeout(DEBUG ? 120000 : 7000);
  before(
    async () =>
    (browser = await chromium.launch(
      DEBUG ? { headless: false, slowMo } : {}
    ))
  );
  after(async () => await browser.close());
  beforeEach(async () => {
    context = await browser.newContext();
    setupContext(context);
    page = await context.newPage();
  });
  afterEach(async () => {
    await page.close();
    await context.close();
  });

  describe('Course Planner Tests', () => {
    it('Load Course', async () => {
      const data = mockData.list;
      const { get } = await handle(endpoints.catalog);
      get(data);

      await page.goto(host);
      await page.waitForSelector('#load-course');

      await page.click('#load-course');

      const list = await page.$$eval(`#progress-course #list .container`, (t) =>
        t.map((s) => s.textContent)
      );
      expect(list.length).to.equal(data.length);

    });

    it('Create Course', async () => {
      const data = mockData.list[0];
      await page.goto(host);

      const { post } = await handle(endpoints.catalog);
      const { onRequest } = post();

      await page.waitForSelector('#form');
      await page.fill('#course-name', data.title);
      await page.fill('#course-type', data.type);
      await page.fill('#description', data.description);
      await page.fill('#teacher-name', data.teacher);

      const [request] = await Promise.all([
        onRequest(),
        page.click('#add-course'),
      ]);

      const postData = JSON.parse(request.postData());

      expect(postData.title).to.equal(data.title);
      expect(postData.type).to.equal(data.type);
      expect(postData.description).to.equal(data.description);
      expect(postData.teacher).to.equal(data.teacher);

      const [courseName] = await page.$$eval(`#course-name`, (t) =>
        t.map((s) => s.value)
      );
      const [courseLength] = await page.$$eval(`#course-type`, (t) =>
        t.map((s) => s.value)
      );
      const [descriptionValue] = await page.$$eval(`#description`, (t) =>
        t.map((s) => s.value)
      );
      const [courseTeacher] = await page.$$eval(`#teacher-name`, (t) =>
        t.map((s) => s.value)
      );

      expect(courseName).to.equal('');
      expect(courseLength).to.equal('');
      expect(descriptionValue).to.equal('');
      expect(courseTeacher).to.equal('');
    });

    it('Edit Course (Has Input)', async () => {
      await page.goto(host);
      const data = mockData.list[0];

      await page.click('#load-course');
      await page.waitForSelector('#list');
      await page.click('#list .container .edit-btn');

      const allCourse = await page.$$eval(`#form input`, (t) =>
        t.map((s) => s.value)
      );

      const allCourseText = await page.$$eval(`#form textarea`, (t) =>
        t.map((s) => s.value)
      );

      expect(allCourse[0]).to.include(data.title);
      expect(allCourse[1]).to.include(data.type);
      expect(allCourse[2]).to.include(data.teacher);
      expect(allCourseText[0]).to.include(data.description);
    });

    it('Edit Course (Makes API Call)', async () => {
      const data = mockData.list[0];
      await page.goto(host);
      const { patch } = await handle(endpoints.byId(data._id));
      const { onRequest } = patch({ id: data._id });

      await page.click('#load-course');
      await page.waitForSelector('#list');
      await page.click('#list .container .edit-btn');
      await page.fill('#course-name', data.title + '2');

      const [request] = await Promise.all([
        onRequest(),
        page.click('#edit-course'),
      ]);

      const postData = JSON.parse(request.postData());
      expect(postData.title).to.equal(data.title + '2');
    });

    it('Finish Course', async () => {
      const data = mockData.list[0];
      await page.goto(host);
      const { del } = await handle(endpoints.byId(data._id));
      const { onResponse, isHandled } = del({ id: data._id });

      await page.click('#load-course');

      await page.waitForSelector('#list');

      await Promise.all([
        onResponse(),
        page.click(
          `#list .container .finish-btn`
        ),
      ]);

      expect(isHandled()).to.be.true;
    });
  });
});

async function setupContext(context) {
  // Catalog and Details
  await handleContext(context, endpoints.catalog, { get: mockData.list });
  await handleContext(context, endpoints.catalog, { post: mockData.list[0] });

  await handleContext(context, endpoints.byId('1001'), {
    get: mockData.list[0],
  });

  // Block external calls
  await context.route(
    (url) => url.href.slice(0, host.length) != host,
    (route) => {
      if (DEBUG) {
        console.log('Preventing external call to ' + route.request().url());
      }
      route.abort();
    }
  );
}

function handle(match, handlers) {
  return handleRaw.call(page, match, handlers);
}

function handleContext(context, match, handlers) {
  return handleRaw.call(context, match, handlers);
}

async function handleRaw(match, handlers) {
  const methodHandlers = {};
  const result = {
    get: (returns, options) => request('GET', returns, options),
    get2: (returns, options) => request('GET', returns, options),
    post: (returns, options) => request('POST', returns, options),
    put: (returns, options) => request('PUT', returns, options),
    patch: (returns, options) => request('PATCH', returns, options),
    del: (returns, options) => request('DELETE', returns, options),
    delete: (returns, options) => request('DELETE', returns, options),
  };

  const context = this;

  await context.route(urlPredicate, (route, request) => {
    if (DEBUG) {
      console.log('>>>', request.method(), request.url());
    }

    const handler = methodHandlers[request.method().toLowerCase()];
    if (handler == undefined) {
      route.continue();
    } else {
      handler(route, request);
    }
  }); ``

  if (handlers) {
    for (let method in handlers) {
      if (typeof handlers[method] == 'function') {
        handlers[method](result[method]);
      } else {
        result[method](handlers[method]);
      }
    }
  }

  return result;

  function request(method, returns, options) {
    let handled = false;

    methodHandlers[method.toLowerCase()] = (route, request) => {
      handled = true;
      route.fulfill(respond(returns, options));
    };

    return {
      onRequest: () => context.waitForRequest(urlPredicate),
      onResponse: () => context.waitForResponse(urlPredicate),
      isHandled: () => handled,
    };
  }

  function urlPredicate(current) {
    if (current instanceof URL) {
      return current.href.toLowerCase().includes(match.toLowerCase());
    } else {
      return current.url().toLowerCase().includes(match.toLowerCase());
    }
  }
}

function respond(data, options = {}) {
  options = Object.assign(
    {
      json: true,
      status: 200,
    },
    options
  );

  const headers = {
    'Access-Control-Allow-Origin': '*',
  };
  if (options.json) {
    headers['Content-Type'] = 'application/json';
    data = JSON.stringify(data);
  }

  return {
    status: options.status,
    headers,
    body: data,
  };
}