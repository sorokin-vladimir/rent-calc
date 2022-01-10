import { HomeService } from '../services';
import { Request } from '../utils';
import { HomeStore } from './HomeStore';
import { TableStore } from './TableStore';
import { UserStore } from './UserStore';

export class RootStore {
  userStore: UserStore;
  tableStore: TableStore;
  homeStore: HomeStore;

  constructor() {
    const request = new Request(this);
    this.userStore = new UserStore(this);
    this.tableStore = new TableStore(this);
    this.homeStore = new HomeStore(this, new HomeService(request));
  }
}
