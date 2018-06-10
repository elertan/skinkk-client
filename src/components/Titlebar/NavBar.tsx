import * as React from 'react';
import colors from '../../colors';

const styles = {
  container: {
    display: 'inline-block',
  } as React.CSSProperties,
  navBarList: {
    listStyleType: 'none',
    paddingLeft: 0,
    color: colors.leagueLight,
  } as React.CSSProperties,
  navItem: {
    display: 'inline',
    marginRight: 15,
    cursor: 'pointer',
  } as React.CSSProperties,
  currentNavItem: {
    borderBottom: `1px solid ${colors.leagueSuperLight}`,
    color: colors.leagueSuperLight,
  } as React.CSSProperties,
};

interface IState {
  route: string;
}

const routes = [
  { route: '/', title: 'HOME' },
  { route: '/browse', title: 'BROWSE' },
  { route: '/settings', title: 'SETTINGS' },
];

class NavBar extends React.Component<{}, IState> {
  public state = {
    route: '/',
  };

  public handleRoute = (routeName: string) => {
    this.setState({ route: routeName });
  }

  public render() {
    return (
      <div style={styles.container}>
        <ul style={styles.navBarList}>
          {routes.map((r, i) =>
            <li
              key={i}
              onClick={() => this.handleRoute(r.route)}
              style={this.getStyleForNavItem(r.route)}
            >
              {r.title}
            </li>,
          )}
        </ul>
      </div>
    );
  }

  private getStyleForNavItem(routeName: string) {
    if (this.state.route === routeName) {
      return Object.assign(styles.navItem, styles.currentNavItem);
    }
    return styles.navItem;
  }
}

export default NavBar;
