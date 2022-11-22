import { Opening } from './opening';

const axios = require('axios').default;
const adapter = require('axios/lib/adapters/http');

axios.defaults.adapter = adapter;

export class API {
  constructor(url) {
    if (url === undefined || url === '') {
      url = process.env.REACT_APP_API_BASE_URL;
    }
    if (url.endsWith('/')) {
      url = url.substr(0, url.length - 1);
    }
    this.url = url;
  }

  withPath(path) {
    if (!path.startsWith('/')) {
      path = '/' + path;
    }
    return `${this.url}${path}`;
  }

  generateAuthToken() {
    return 'Bearer ' + new Date().toISOString();
  }

  async getAllOpenings() {
    return axios
      .get(this.withPath('/openings'), {
        headers: {
          Authorization: this.generateAuthToken()
        }
      })
      .then((r) => r.data.map((p) => new Opening(p)));
  }

  async getOpening(id) {
    return axios
      .get(this.withPath('/opening/' + id), {
        headers: {
          Authorization: this.generateAuthToken()
        }
      })
      .then((r) => new Opening(r.data));
  }
}

export default new API(
  process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001'
);
