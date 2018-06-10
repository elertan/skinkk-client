import * as React from "react";
import colors from '../colors';

import routes from '../routes';
import Titlebar from "./Titlebar";

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    color: '#EEE',
    backgroundImage: 'url(./assets/img/background.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    border: `1px solid ${colors.leagueLight}`,
    borderTop: `2px solid ${colors.leagueLight2}`,
    overflow: 'hidden',
  } as React.CSSProperties,
  routeContainer: {
    width: '100%',
    height: '100%',
  },
};

interface IState {
  loading: boolean;
}

class App extends React.Component<{}, IState> {
  public state = {
    loading: false,
  };

  public render() {
    if (this.state.loading) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div style={styles.container}>
        <Titlebar />
        <div style={styles.routeContainer}>
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
