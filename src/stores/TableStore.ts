/* eslint-disable no-console */
import { makeAutoObservable } from 'mobx';
import { RootStore } from './RootStore';

export class TableStore {
  constructor(private rootStore: RootStore) {
    makeAutoObservable(this);
  }

  async getAllFields() {}

  async addField({
    name,
    description,
    dimension,
    tariff,
  }: {
    name: string;
    description: string;
    dimension: string;
    tariff: number;
  }) {
    console.group('TableStore:22');
    console.log('TableStore:23 | name', name);
    console.log('TableStore:24 | description', description);
    console.log('TableStore:25 | dimension', dimension);
    console.log('TableStore:26 | tariff', tariff);
    console.groupEnd();
  }
}
