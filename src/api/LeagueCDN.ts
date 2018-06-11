const patchVersion = '8.10.1';

export default class LeagueCDN {
  public static getChampionIconUrl(championKey: string) {
    return `http://ddragon.leagueoflegends.com/cdn/${patchVersion}/img/champion/${championKey}.png`;
  }
}