import { RootStore } from '../stores/RootStore';

export class Request {
  constructor(private rootStore: RootStore) {}

  private async withVerb({ verb, url, options }: WithVerb) {
    const opts = {
      credentials: 'same-origin' as RequestCredentials,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: '',
      },
      ...options,
      method: verb,
    };

    if (verb !== 'GET' && verb !== 'DELETE' && opts.body) {
      opts.body = JSON.stringify(opts.body);
    }

    const token = this.rootStore.userStore.accessToken;
    if (!token) this.rootStore.userStore.logout();
    opts.headers.authorization = `Bearer ${token}`;

    const response = await fetch(url, opts as RequestInit);

    if (!response) {
      throw new Error(`Unexpected response type from ${url}`);
    }

    if (response.status === 401 || response.status === 403) {
      this.rootStore.userStore.logout();
    }

    if (response.status >= 400) {
      throw response;
    } else {
      return response;
    }
  }

  async get(url: string, options?: RequestOptions) {
    if (options && options.body) {
      throw new Error('Trying to invoke GET on ' + url + ' with body');
    }
    return this.withVerb({ verb: 'GET', url, options });
  }

  async post(url: string, options: RequestOptions) {
    return this.withVerb({ verb: 'POST', url, options });
  }

  async patch(url: string, options: RequestOptions) {
    return this.withVerb({ verb: 'PATCH', url, options });
  }

  async delete(url: string, options?: RequestOptions) {
    return this.withVerb({ verb: 'DELETE', url, options });
  }
}

type WithVerb = {
  verb: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  url: string;
  options?: RequestOptions;
};

type RequestOptions = Omit<RequestInit, 'body'> & {
  body?: RequestInit['body'] | Record<string, unknown>;
  headers?: Record<string, string>;
};
