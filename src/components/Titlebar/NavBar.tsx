import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { AnyAction } from 'redux';
import colors from '../../colors';
import { IAppState } from '../../store';
import IDispatchFunc from '../../store/IDispatchFunc';

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
    fontSize: 14,
  } as React.CSSProperties,
  currentNavItem: {
    borderBottom: `1px solid ${colors.leagueSuperLight}`,
    color: colors.leagueSuperLight,
  } as React.CSSProperties,
};

interface IRouteProps {
  pushRoute: (routeName: string) => void;
}

interface IState {
  route: string;
}

const routes = [
  { route: '/', title: 'HOME' },
  { route: '/browse', title: 'BROWSE' },
  { route: '/settings', title: 'SETTINGS' },
];

class NavBar extends React.Component<IRouteProps, IState> {
  public state = {
    route: '/',
  };

  public handleRoute = (routeName: string) => {
    // tslint:disable-next-line:no-console
    this.props.pushRoute(routeName);
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
      return Object.assign({}, styles.navItem, styles.currentNavItem);
    }
    return styles.navItem;
  }
}

export default connect(
  (state: IAppState) => ({

  }),
  (dispatch: IDispatchFunc<AnyAction>) => ({
    pushRoute: (route: string) => dispatch(push(route)),
  } as IRouteProps),
)(NavBar);
