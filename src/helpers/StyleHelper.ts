import LocalStorage from "../LocalStorage";

class StyleHelper {
  public static getAppBackgroundForImageUrl(imageUrl: string) {
    const opacity = LocalStorage.instance.data!.backgroundOpacity;
    // tslint:disable-next-line:no-console
    console.log(opacity);
    return `linear-gradient(rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, ${opacity})), url(${imageUrl})`;
  }
}

export default StyleHelper;
