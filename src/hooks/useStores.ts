import { MobXProviderContext } from 'mobx-react';
import { useContext } from 'react';
import { UserStore } from '../stores/UserStore';

type Stores = {
  userStore: UserStore;
};

export const useStore = () => useContext(MobXProviderContext) as Stores;
