import { Stores } from 'src/hooks/useStores';
import { RootStore } from './RootStore';

const rootStore = new RootStore();

const stores = Object.getOwnPropertyNames(rootStore).reduce(
  (acc, storeName) => ({
    ...acc,
    [storeName]: rootStore[storeName as keyof Stores],
  }),
  {}
);

export { rootStore, stores };
