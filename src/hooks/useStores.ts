import { MobXProviderContext } from 'mobx-react';
import { useContext } from 'react';
import { UserStore } from '../stores/UserStore';
import { TableStore } from '../stores/TableStore';
import { HomeStore } from '../stores/HomeStore';

type Stores = {
  userStore: UserStore;
  tableStore: TableStore;
  homeStore: HomeStore;
};

export const useStores = () => useContext(MobXProviderContext) as Stores;
