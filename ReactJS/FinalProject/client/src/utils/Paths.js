const Paths = {
    index: '/',
    login: '/login',
    afterLogin: '/products',
    logout: '/logout',
    register: '/register',
    products: '/products',
    groups: '/groups',
    profile: (id) => `/profile/${id}`,
}

export default Paths;