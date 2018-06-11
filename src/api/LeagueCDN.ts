import Axios from 'axios';
import Champion from '../models/Champion';

const patchVersion = '8.11.1';

export default class LeagueCDN {
  public static async getChampions() {
    const response = await Axios.get('http://localhost:13370/client/champions');
    return response.data as Champion[];
  }

  public static getChampionIconUrl(championKey: string) {
    return `http://ddragon.leagueoflegends.com/cdn/${patchVersion}/img/champion/${championKey}.png`;
  }
}
