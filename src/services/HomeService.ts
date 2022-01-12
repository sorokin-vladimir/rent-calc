import { API_URL } from 'src/init';
import { getUrl, Request } from '../utils';

export class HomeService {
  private static BASE_URL = `${API_URL}/api/homes`;

  constructor(private request: Request) {}

  private getUrl = getUrl(HomeService.BASE_URL);

  async getAllHomes() {
    try {
      const response = await this.request.get(this.getUrl(''));
      return response.json();
    } catch (err) {
      console.error('`Get all homes` error:', err);
    }
  }

  async createHome(name: string) {
    try {
      const response = await this.request.post(this.getUrl(''), {
        body: { name },
      });
      return response.json();
    } catch (err) {
      console.error('`Create home` error:', err);
    }
  }

  async removeHome(homeID: string) {
    return this.request.delete(this.getUrl(homeID));
  }
}
