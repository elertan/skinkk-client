import * as React from "react";
import colors from '../colors';

import { connect } from 'react-redux';
import { AnyAction } from "redux";
import routes from '../routes';
import {
  GlobalStore, IAppState,
} from '../store';
import IDispatchFunc from "../store/IDispatchFunc";
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
    borderTop: `3px solid ${colors.leagueLight2}`,
    overflow: 'hidden',
  } as React.CSSProperties,
  routeContainer: {
    width: '100%',
    height: '100%',
  },
};

interface IStoreProps {
  globalStore: GlobalStore.State;
}

interface IStoreActions {
  globalStoreActions: GlobalStore.IActionCreators;
}

// tslint:disable-next-line:no-empty-interface
interface IProps extends IStoreProps, IStoreActions {
}

interface IState {
  loading: boolean;
}

class App extends React.Component<IProps, IState> {
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
      <div style={this.getContainerStyle()}>
        <Titlebar />
        <div style={styles.routeContainer}>
          {routes}
        </div>
      </div>
    );
  }

  private getContainerStyle() {
    // This will optionally set the background for the entire application
    if (this.props.globalStore.backgroundImage) {
      return Object.assign(
        {},
        styles.container,
        { backgroundImage: this.props.globalStore.backgroundImage! } as React.CSSProperties,
      );
    }

    return styles.container;
  }
}

export default connect(
  (state: IAppState) => ({
    globalStore: state.global,
  } as IStoreProps),
  (dispatch: IDispatchFunc<AnyAction>) => ({
    globalStoreActions: GlobalStore.actionCreators(dispatch),
  } as IStoreActions),
)(App);
