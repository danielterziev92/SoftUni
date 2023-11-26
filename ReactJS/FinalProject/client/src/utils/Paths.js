const Paths = {
    index: '/',
    login: '/login',
    logout: '/logout',
    register: '/register',
    products: '/products',
    groups: '/groups',
    profile: (id) => `/profile/${id}`,
}

export default Paths;