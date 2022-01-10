export const routes = [
  { name: 'login', path: '/login' },
  { name: 'signup', path: '/signup' },
  {
    name: 'home',
    path: '/home',
    children: [{ name: 'oneHome', path: '/:homeID' }],
  },
  { name: 'table', path: '/table' },
  { name: 'additem', path: '/additem' },
];
