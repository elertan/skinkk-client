import { shell } from 'electron';
import * as React from 'react';
import colors from '../../colors';

import DropdownSearchbar from './HomePage/DropdownSearchbar';

interface IState {
  hoveredSocialMediaIcons: boolean[];
}

const styles = {
  container: {
    color: colors.leagueSuperLight,
    fontFamily: 'LeagueFont',
  } as React.CSSProperties,
  headImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5vh',
  } as React.CSSProperties,
  headImage: {
    width: '15vw',
    maxWidth: 150,
  } as React.CSSProperties,
  headlineContainer: {
    textAlign: 'center',
    fontSize: 28,
    marginTop: '5vh',
  } as React.CSSProperties,
  searchbarContainer: {
    marginTop: '5vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  } as React.CSSProperties,
  extraTextContainer: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: '5vh',
  } as React.CSSProperties,
  socialMediaContainer: {
    marginTop: '10vh',
    display: 'flex',
    justifyContent: 'center',
  } as React.CSSProperties,
  socialMediaContainerInner: {
    display: 'flex',
    justifyContent: 'space-between',
  } as React.CSSProperties,
  socialMediaIcon: {
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 36,
  } as React.CSSProperties,
  socialMediaIcon_hover: {
    color: '#CCC',
  } as React.CSSProperties,
};

const socialMedias = [
  {
    class: 'fab fa-facebook',
    name: 'Facebook',
    onClick: () => shell.openExternal('https://www.facebook.com/skinkk.official/'),
  },
  {
    class: 'fab fa-youtube',
    name: 'YouTube',
    onClick: () => shell.openExternal('https://www.youtube.com/channel/UC-ZgC3QeCSzPBlPPef9Hzjg'),
  },
  {
    class: 'fab fa-discord',
    name: 'Discord',
    onClick: () => shell.openExternal('https://discordapp.com/invite/uVGCzKT'),
  },
  {
    class: 'fab fa-patreon',
    name: 'Patreon',
    onClick: () => shell.openExternal('https://www.patreon.com/skinkk'),
  },
];

class HomePage extends React.Component<{}, IState> {
  public state = {
    hoveredSocialMediaIcons: socialMedias.map((_) => false),
  };

  public render() {
    return (
      <div style={styles.container}>
        <div style={styles.headImageContainer}>
          <img
            style={styles.headImage}
            src="./assets/img/icon.png"
          />
        </div>
        <div style={styles.headlineContainer}>
          <h2>All League Skins for FREE</h2>
        </div>
        <div style={styles.searchbarContainer}>
          <DropdownSearchbar />
        </div>
        <div style={styles.extraTextContainer}>
          A total of 1427 skins ready to be used for FREE. Try them out now!
        </div>
        <div style={styles.socialMediaContainer}>
          <div style={styles.socialMediaContainerInner}>
            {socialMedias.map((s, i) =>
            <i
              key={i}
              className={s.class}
              style={this.getSocialMediaIconStyle(i)}
              onClick={s.onClick}
              title={s.name}
              onMouseEnter={() => this.handleOnMouseHoverSocialMediaIcon(i, true)}
              onMouseLeave={() => this.handleOnMouseHoverSocialMediaIcon(i, false)}
            />,
            )}
          </div>
        </div>
      </div>
    );
  }

  private getSocialMediaIconStyle = (index: number) => {
    if (this.state.hoveredSocialMediaIcons[index]) {
      return Object.assign({}, styles.socialMediaIcon, styles.socialMediaIcon_hover);
    }

    return styles.socialMediaIcon;
  }

  private handleOnMouseHoverSocialMediaIcon = (index: number, isOver: boolean) => {
    // Re-create the entire array to conform to react's immutability.
    const hoveredStates = [...this.state.hoveredSocialMediaIcons];
    hoveredStates[index] = isOver;
    this.setState({hoveredSocialMediaIcons: hoveredStates});
  }
}

export default HomePage;
