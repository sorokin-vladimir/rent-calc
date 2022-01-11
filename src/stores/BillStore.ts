import {
  IObservableArray,
  makeAutoObservable,
  runInAction,
  observable,
} from 'mobx';
import { BillService } from '../services/BillService';
import { InputNames, Field } from '../types';
import { RootStore } from './RootStore';

export class BillStore {
  fields: IObservableArray<Field> = observable.array([]);

  constructor(private rootStore: RootStore, private billService: BillService) {
    makeAutoObservable(this);
  }

  async getAllFields() {
    const homeID = this.rootStore.homeStore.currentHomeID;
    if (!homeID) {
      return null;
    }
    const response = await this.billService.getAllFields(homeID);
    runInAction(() => {
      this.fields.replace(response);
    });
  }

  async addField({
    name,
    description,
    dimension,
    tariff,
  }: Pick<InputNames, 'name' | 'description' | 'dimension' | 'tariff'>) {
    const homeID = this.rootStore.homeStore.currentHomeID;
    if (!homeID) {
      return null;
    }
    const response = await this.billService.createField(homeID, {
      name,
      description,
      dimension,
      tariff,
    });
    runInAction(() => {
      this.fields.push({
        name,
        description,
        dimension,
        tariff,
        ...response,
      });
    });
  }

  async removeField(fieldId: string) {
    const homeID = this.rootStore.homeStore.currentHomeID;
    if (!homeID) {
      return null;
    }
    const response = await this.billService.removeField(homeID, fieldId);
    if (response.status === 204) {
      const fieldToDel = this.fields.find((field) => field.id === fieldId);
      if (fieldToDel) this.fields.remove(fieldToDel);
    }
  }
}
