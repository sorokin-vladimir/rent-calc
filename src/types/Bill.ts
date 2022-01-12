import { InputNames } from './Input';
import { CommonData } from './Common';

export type Field = Pick<
  InputNames,
  'name' | 'description' | 'dimension' | 'tariff'
> &
  CommonData;
