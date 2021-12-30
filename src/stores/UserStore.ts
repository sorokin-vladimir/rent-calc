import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { makeAutoObservable, runInAction } from 'mobx';
import { router } from '../routes';
import { RootStore } from './RootStore';

export class UserStore {
  accessToken: string | null = null;

  constructor(private rootStore: RootStore) {
    makeAutoObservable(this);

    const token = localStorage.getItem('accessToken');
    if (token) {
      this.accessToken = token;
    }
  }

  async login(email: string, password: string) {
    if (!(email && password)) return false;

    try {
      const auth = getAuth();
      const response = await signInWithEmailAndPassword(auth, email, password);
      const { user } = response;
      runInAction(() => {
        const { accessToken } = user as unknown as { accessToken: string };
        if (accessToken) {
          this.accessToken = accessToken;
          localStorage.setItem('accessToken', accessToken);
          router.navigate('table');
        }
      });
    } catch (err) {
      console.error(err);
    }
  }

  async signup(email: string, password: string) {
    if (!(email && password)) return false;

    try {
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      runInAction(() => {
        const { accessToken } = user as unknown as { accessToken: string };
        if (accessToken) {
          this.accessToken = accessToken;
          localStorage.setItem('accessToken', accessToken);
          router.navigate('table');
        }
      });
    } catch (err) {
      console.error(err);
    }
  }

  async logout() {
    try {
      const auth = getAuth();
      await signOut(auth);
      localStorage.removeItem('accessToken');
      router.navigate('login');
    } catch (err) {
      console.error(err);
    }
  }

  get isAuth() {
    return !!this.accessToken;
  }
}
