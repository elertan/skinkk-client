import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface IRouteParams {
  key: string;
}

interface IProps extends RouteComponentProps<IRouteParams> {

}

class DetailPage extends React.Component<IProps, {}> {
  public render() {
    // tslint:disable-next-line:no-console
    console.log(this.props.match.params.key);
    return (
      <div>
        sup
      </div>
    );
  }
}

export default DetailPage;
