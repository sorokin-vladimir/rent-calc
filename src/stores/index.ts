import { RootStore } from './RootStore';

const rootStore = new RootStore();

const stores = Object.getOwnPropertyNames(rootStore).reduce(
  (acc, storeName) => ({
    ...acc,
    // @ts-ignore
    [storeName]: rootStore[storeName],
  }),
  {}
);

export { rootStore, stores };
