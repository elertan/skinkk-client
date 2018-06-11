import * as React from 'react';
import colors from '../../colors';

import DropdownSearchbar from './HomePage/DropdownSearchbar';

const styles = {
  container: {
    color: colors.leagueSuperLight,
    fontFamily: 'LeagueFont',
  } as React.CSSProperties,
  headlineContainer: {
    textAlign: 'center',
    fontSize: 28,
    marginTop: '15vh',
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
};

class HomePage extends React.Component<{}, {}> {
  public render() {
    return (
      <div style={styles.container}>
        <div style={styles.headlineContainer}>
          <h2>All League Skins for FREE</h2>
        </div>
        <div style={styles.searchbarContainer}>
          <DropdownSearchbar />
        </div>
        <div style={styles.extraTextContainer}>
          A total 1427 skins ready to start using for FREE. Try them out now!
        </div>
        <div>
          <p>Facebook</p>
          <p>YouTube</p>
          <p>Discord</p>
        </div>
      </div>
    );
  }
}

export default HomePage;
