import {
  makeAutoObservable,
  runInAction,
  IObservableArray,
  observable,
} from 'mobx';
import { HomeService } from '../services';
import { Home } from '../types';
import { RootStore } from './RootStore';

export class HomeStore {
  homes: IObservableArray<Home> = observable.array([]);
  currentHomeID: string | null = null;

  constructor(private rootStore: RootStore, private homeService: HomeService) {
    makeAutoObservable(this);
  }

  get currentHome() {
    if (!this.currentHomeID) return null;
    const home = this.homes.find(({ id }) => id === this.currentHomeID);

    if (!home) return null;
    return home;
  }

  async createHome(name: string) {
    const response = await this.homeService.createHome(name);
    runInAction(() => {
      this.homes.push({ ...response, name });
    });
  }

  async getAllHomes() {
    const response = await this.homeService.getAllHomes();
    runInAction(() => {
      this.homes.replace(response);
    });
  }

  setCurrentHomeID(id: string | null) {
    this.currentHomeID = id;
  }
}
