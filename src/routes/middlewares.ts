import { Router, State } from 'router5';
import { DoneFn } from 'router5/dist/types/base';
import { rootStore } from '../stores';

export const checkAuth =
  (router: Router) =>
  (
    toState: State,
    fromState: State,
    done: DoneFn
  ): boolean | Promise<unknown> | void => {
    if (toState.name === 'login' || toState.name === 'signup') {
      done();
      return;
    }

    if (rootStore.userStore.isAuth) {
      done();
      return;
    }

    router.navigate('login');
  };
