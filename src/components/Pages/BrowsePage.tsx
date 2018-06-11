import * as React from 'react';
import LeagueCDN from '../../api/LeagueCDN';
import Champion from '../../models/Champion';
import ChampionGrid from '../League/ChampionGrid';
import Spinner from '../UI/Spinner';

interface IState {
  champions?: Champion[];
}

const styles = {
  container: {
    height: 'calc(100vh - 40px)',
    overflowY: 'auto',
  } as React.CSSProperties,
};

class BrowsePage extends React.Component<{}, IState> {
  public state = {
    champions: undefined as Champion[],
  };

  public async componentDidMount() {
    const champions = await LeagueCDN.getChampions();
    this.setState({champions});
  }

  public render() {
    return (
      <div style={styles.container}>
        {!this.state.champions &&
        <Spinner />
        }
        <ChampionGrid champions={this.state.champions || []} />
      </div>
    );
  }
}

export default BrowsePage;
