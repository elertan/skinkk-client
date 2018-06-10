import * as React from "react";

interface IState {
  loading: boolean;
}

class App extends React.Component<{}, IState> {
  public state = {
    loading: true,
  };

  public render() {
    return (
      <div>
        {this.state.loading && "Loading"}
      </div>
    );
  }
}

export default App;
