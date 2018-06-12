import * as React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { IAppState, ModalStore } from '../../store';
import IDispatchFunc from '../../store/IDispatchFunc';
import eulaModalCreator from '../ModalCreators/eulaModal';
import { Modal } from '../ModalManager';
import Button from '../UI/Button';
import Spinner from '../UI/Spinner';

interface IStoreProps {
  modalStore: ModalStore.State;
}

interface IStoreActionProps {
  modalStoreActions: ModalStore.IActionCreators;
}

interface IProps extends IStoreProps, IStoreActionProps {}

class SettingsPage extends React.Component<IProps, {}> {
  public render() {
    // tslint:disable-next-line:no-console
    return (
      <div>
        This page will show my settings later, but for now is being used for testing purposes.
        <Button onClick={() => this.props.modalStoreActions.openModal(eulaModalCreator)}>Show EULA Modal</Button>
      </div>
    );
  }
}

export default connect(
  (state: IAppState) => ({
    modalStore: state.modal,
  } as IStoreProps),
  (dispatch: IDispatchFunc<Action>) => ({
    modalStoreActions: ModalStore.actionCreators(dispatch),
  } as IStoreActionProps),
)(SettingsPage);
