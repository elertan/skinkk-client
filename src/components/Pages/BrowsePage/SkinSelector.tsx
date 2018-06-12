import * as React from 'react';
import LeagueCDN from '../../../api/LeagueCDN';
import Champion from '../../../models/Champion';
import Skin from '../../../models/Skin';

interface IProps {
  champion: Champion;
  selectedSkin?: Skin;
  onSkinChanged?: (skin: Skin) => void;
}

const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  } as React.CSSProperties,
  currentSkinContainer: {
    flex: 1,
    // width: '100%',
    // height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  } as React.CSSProperties,
  switchContainer: {
    background: 'red',
    height: '20%',
  } as React.CSSProperties,
};

const maxSwitchSkins = 5;

class SkinSelector extends React.Component<IProps, {}> {
  public render() {
    const champion = this.props.champion;
    const skin = this.props.selectedSkin || this.props.champion.skins[0];
    const skinIndex = champion.skins.indexOf(skin);
    const maxSkins = maxSwitchSkins > champion.skins.length ? champion.skins.length : maxSwitchSkins;
    const skinBorderAmount = Math.floor(maxSkins / 2);

    let switchSkins = [skin];
    for (let i = 1; i < maxSkins; i++) {
      const isPrepending = i > skinBorderAmount;
      if (!isPrepending) {
        if (skinIndex + i > champion.skins.length - 1) {
          switchSkins = [...switchSkins, champion.skins[i]];
          continue;
        }
        switchSkins = [...switchSkins, champion.skins[skinIndex + i]];
        continue;
      }

      const backwardsIndex = skinIndex - i;
      if (backwardsIndex < 0) {
        switchSkins = [champion.skins[champion.skins.length + skinBorderAmount - i], ...switchSkins];
        continue;
      }
      switchSkins = [champion.skins[skinIndex - Math.abs(backwardsIndex)], ...switchSkins];
    }
    return (
      <div style={styles.container}>
        <div style={styles.currentSkinContainer}>
          {this.getImageDiv(champion.key, skin.num)}
        </div>
        <div style={styles.switchContainer}>
          {switchSkins.map((s: Skin, i: number) =>
          <div>{s.name}</div>,
          )}
        </div>
      </div>
    );
  }

  private getImageDiv = (championKey: string, skinIndex: number) => {
    return (
      <div
        style={{
          backgroundImage: `url(${LeagueCDN.getChampionSplashUrl(championKey, skinIndex)})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '80%',
          height: '80%',
        }}
      />
    );
  }
}

export default SkinSelector;
