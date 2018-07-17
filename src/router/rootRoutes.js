 const rootRoutes =  [
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/',
    component: App
  }
]

export default rootRoutes