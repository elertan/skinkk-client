import * as React from 'react';
import colors from '../../colors';

import DropdownSearchbar from './HomePage/DropdownSearchbar';

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
    marginLeft: 20,
    marginRight: 20,
    fontSize: 36,
  } as React.CSSProperties,
};

const socialMedias = [
  { class: 'fab fa-facebook', name: 'Facebook' },
  { class: 'fab fa-youtube', name: 'YouTube' },
  { class: 'fab fa-discord', name: 'Discord' },
];

class HomePage extends React.Component<{}, {}> {
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
          A total 1427 skins ready to start using for FREE. Try them out now!
        </div>
        <div style={styles.socialMediaContainer}>
          <div style={styles.socialMediaContainerInner}>
            {socialMedias.map((s, i) =>
            <i
              key={i}
              className={s.class}
              style={styles.socialMediaIcon}
            />,
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
