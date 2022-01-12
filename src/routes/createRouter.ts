import { createRouter } from 'router5';
import loggerPlugin from 'router5-plugin-logger';
import browserPlugin from 'router5-plugin-browser';

import { routes } from './routes';
import { checkAuth, setData } from './middlewares';

function configureRouter() {
  const router = createRouter(routes, {
    defaultRoute: 'home',
  });

  router.usePlugin(loggerPlugin);
  router.usePlugin(browserPlugin());

  router.useMiddleware(checkAuth);
  router.useMiddleware(setData);

  return router;
}

const router = configureRouter();

export { router };
