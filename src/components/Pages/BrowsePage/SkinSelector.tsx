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

class SkinSelector extends React.Component<IProps, {}> {
  public render() {
    const champion = this.props.champion;
    const skin = this.props.selectedSkin || this.props.champion.skins[0];
    return (
      <div style={styles.container}>
        <div style={styles.currentSkinContainer}>
          {this.getImageDiv(champion.key, skin.num)}
        </div>
        <div style={styles.switchContainer}>

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
