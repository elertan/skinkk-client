class Data {
  public isFirstLaunch: boolean = true;
}

type ManipulateAndSaveFunc = (data: Data) => Data;

const localStorageKey = 'LocalStorage_data';
// tslint:disable-next-line:max-classes-per-file
class LocalStorage {
  // tslint:disable-next-line:variable-name
  private static _instance: LocalStorage;
  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  public data?: Data;

  public initialize = () => {
    const data = localStorage.getItem(localStorageKey);
    if (!data) {
      this.data = new Data();
      return;
    }
    this.data = JSON.parse(data);
  }

  public save = () => {
    const json = JSON.stringify(this.data);
    localStorage.setItem(localStorageKey, json);
  }

  public manipulateAndSave = (func: ManipulateAndSaveFunc) => {
    this.data = func(Object.assign({}, this.data) as Data);
    this.save();
  }

}

export default LocalStorage;
