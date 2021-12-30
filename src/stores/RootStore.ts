import { UserStore } from './UserStore';

export class RootStore {
  userStore: UserStore;

  constructor() {
    this.userStore = new UserStore(this);
    // this.todoStore = new TodoStore(this)
  }
}
