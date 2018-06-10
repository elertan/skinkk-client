import * as React from 'react';

import Button from '../UI/Button';

class HomePage extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        Welcome home!
        <Button onClick={() => alert('Hello!')}>Test</Button>
      </div>
    );
  }
}

export default HomePage;
