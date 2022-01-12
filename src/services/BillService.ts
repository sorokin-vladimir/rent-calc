import { InputNames } from '../types';
import { getUrl, Request } from '../utils';

export class BillService {
  private static BASE_URL =
    'http://localhost:5001/serverless-2720f/us-central1/api/bill';

  constructor(private request: Request) {}

  private getUrl = getUrl(BillService.BASE_URL);

  async getAllFields(homeID: string) {
    try {
      const response = await this.request.get(this.getUrl(`${homeID}/fields`));
      return response.json();
    } catch (err) {
      console.error('`Get all fields` error:', err);
    }
  }

  async createField(
    homeID: string,
    {
      name,
      description,
      dimension,
      tariff,
    }: Pick<InputNames, 'name' | 'description' | 'dimension' | 'tariff'>
  ) {
    try {
      const response = await this.request.post(this.getUrl(`${homeID}/field`), {
        body: { name, description, dimension, tariff },
      });
      return response.json();
    } catch (err) {
      console.error("`Create bill's field` error:", err);
    }
  }

  async removeField(homeID: string, fieldID: string) {
    return this.request.delete(this.getUrl(`${homeID}/${fieldID}`));
  }
}
