import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { push } from 'react-router-redux';
import { Action } from 'redux';
import Champion from '../../../models/Champion';
import { ChampionsStore, GlobalStore, IAppState } from '../../../store';
import IDispatchFunc from '../../../store/IDispatchFunc';
import Button from '../../UI/Button';
import Spinner from '../../UI/Spinner';

interface IRouteParams {
  key: string;
}

interface IStoreProps {
  globalStore: GlobalStore.State;
  championsStore: ChampionsStore.State;
}

interface IStoreActions {
  globalStoreActions: GlobalStore.IActionCreators;
  championsStoreActions: ChampionsStore.IActionCreators;
  push: (route: string) => void;
}

interface IProps extends RouteComponentProps<IRouteParams>, IStoreProps, IStoreActions {}

interface IState {
  champion?: Champion;
}

const styles = {
  container: {
    height: 'calc(100vh - 50px)',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  } as React.CSSProperties,
  topRowContainer: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  } as React.CSSProperties,
  backButtonContainer: {
    position: 'relative',
    bottom: 30,
  } as React.CSSProperties,
  backButtonIcon: {
    fontSize: 21,
  } as React.CSSProperties,
  championName: {
    textAlign: 'center',
    fontSize: 36,
    fontFamily: 'LeagueFont',
  } as React.CSSProperties,
};

class DetailPage extends React.Component<IProps, IState> {
  public state = {
    champion: undefined as Champion,
  };

  public componentDidMount() {
    const championKey = this.props.match.params.key;
    const champion = this.props.championsStore.getSuccess!.find((c: Champion) => c.key === championKey);
    this.setState({ champion });
    // tslint:disable-next-line:max-line-length
    this.props.globalStoreActions.setBackgroundImage(`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.key}_0.jpg)`);
  }

  public render() {
    if (!this.state.champion) {
      return (<Spinner />);
    }

    return (
      <div style={styles.container}>
        <div style={styles.topRowContainer}>
          <h1 style={styles.championName}>{this.state.champion.name}</h1>
          <div style={styles.backButtonContainer}>
            <Button
              onClick={() => this.props.push('/browse')}
            >
              <i
                style={styles.backButtonIcon}
                className="fas fa-angle-left"
              />
            </Button>
          </div>
        </div>
        <div>SkinViewer</div>
        <div>SkinSelector</div>
      </div>
    );
  }
}

export default connect(
  (state: IAppState) => ({
    globalStore: state.global,
    championsStore: state.champions,
  } as IStoreProps),
  (dispatch: IDispatchFunc<Action>) => ({
    globalStoreActions: GlobalStore.actionCreators(dispatch),
    championsStoreActions: ChampionsStore.actionCreators(dispatch),
    push: (route: string) => dispatch(push(route)),
  } as IStoreActions),
)(DetailPage);