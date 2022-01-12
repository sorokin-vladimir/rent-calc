import { HomeService } from '../services';
import { Request } from '../utils';
import { HomeStore } from './HomeStore';
import { BillStore } from './BillStore';
import { UserStore } from './UserStore';
import { BillService } from '../services/BillService';

export class RootStore {
  userStore: UserStore;
  billStore: BillStore;
  homeStore: HomeStore;

  constructor() {
    const request = new Request(this);
    this.userStore = new UserStore(this);
    this.billStore = new BillStore(this, new BillService(request));
    this.homeStore = new HomeStore(this, new HomeService(request));
  }
}
