import axios from 'axios'

/**
 * microCMSのサービスクラス。
 */
export default class MicroCms {

  /**
   * 指定したURL/APIキーを元に、microCMSからデータを取得する。
   */
  static async getData (url:string, apikey:string) {
    const headers = { headers:{ "X-API-KEY": apikey } };
    const  { data } = await axios.get(url, headers);
    return data.contents;
  }

}