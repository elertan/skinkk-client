import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Action } from 'redux';
import Champion from '../../../models/Champion';
import { ChampionsStore, IAppState, GlobalStore } from '../../../store';
import IDispatchFunc from '../../../store/IDispatchFunc';
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
}

interface IProps extends RouteComponentProps<IRouteParams>, IStoreProps, IStoreActions {}

interface IState {
  champion?: Champion;
}

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
      <div>
        {this.state.champion.name}
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
  } as IStoreActions),
)(DetailPage);
