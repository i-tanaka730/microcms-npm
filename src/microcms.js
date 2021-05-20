import axios from 'axios'

export class MicroCms {
  async getData (url, apikey) {
    const headers = { headers:{ "X-API-KEY": apikey } };
    const  { data } = await axios.get(url, headers);
    return data.contents;
  }
}