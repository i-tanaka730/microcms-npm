import axios from 'axios'

export default class MicroCms {
  async getData (url, apikey) {
    const headers = { headers:{ "X-API-KEY": apikey } };
    const  { data } = await axios.get(url, headers);
    return data.contents;
  }
}