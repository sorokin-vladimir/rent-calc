import { MobXProviderContext } from 'mobx-react';
import { useContext } from 'react';
import { UserStore } from '../stores/UserStore';
import { BillStore } from '../stores/BillStore';
import { HomeStore } from '../stores/HomeStore';

export type Stores = {
  userStore: UserStore;
  billStore: BillStore;
  homeStore: HomeStore;
};

export const useStores = () => useContext(MobXProviderContext) as Stores;
