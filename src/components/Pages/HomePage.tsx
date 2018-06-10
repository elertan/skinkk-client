import * as React from 'react';

import Button from '../UI/Button';
import SearchField from '../UI/SearchField';
import TextField from '../UI/TextField';

class HomePage extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        Home
        <Button>Hi</Button>
        <TextField value="You can search" />
        <SearchField value="ME!!" />
      </div>
    );
  }
}

export default HomePage;
