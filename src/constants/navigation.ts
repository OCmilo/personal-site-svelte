interface Navigation {
  name: string
  path: string
}

const routes: Navigation[] = [
  {
    name: 'Contacts',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
]

export { routes as default }
