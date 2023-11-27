const Paths = {
    index: '/',
    login: '/login',
    afterLogin: '/products',
    logout: '/logout',
    afterLogout: '/login',
    register: '/register',
    products: '/products',
    groups: '/groups',
    profile: (id) => `/profile/${id}`,
}

export default Paths;