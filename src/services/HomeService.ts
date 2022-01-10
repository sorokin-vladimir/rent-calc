import { Request } from '../utils';

export class HomeService {
  private static BASE_URL =
    'http://localhost:5001/serverless-2720f/us-central1/api/';

  constructor(private request: Request) {}

  private getUrl(path: Path) {
    return HomeService.BASE_URL + path;
  }

  async getAllHomes() {
    try {
      const response = await this.request.get(this.getUrl('homes'));
      return response.json();
    } catch (err) {
      console.error('`Get all homes` error:', err);
    }
  }

  async createHome(name: string) {
    try {
      const response = await this.request.post(this.getUrl('home'), {
        body: { name },
      });
      return response.json();
    } catch (err) {
      console.error('`Create home` error:', err);
    }
  }
}

type Path = 'homes' | 'home';
