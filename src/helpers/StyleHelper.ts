class StyleHelper {
  public static getAppBackgroundForImageUrl(imageUrl: string) {
    return `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`;
  }
}

export default StyleHelper;
