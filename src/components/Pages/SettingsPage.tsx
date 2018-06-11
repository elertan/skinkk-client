import * as React from 'react';
import Spinner from '../UI/Spinner';


class SettingsPage extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        These are my settings!
        <Spinner />
      </div>
    );
  }
}

export default SettingsPage;
