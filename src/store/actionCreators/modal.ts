import { Modal } from "../../components/ModalManager";
import ActionNames from "../actionNames/modal";
import KnownAction, { IOpenModalAction } from "../actions/modal";
import IDispatchFunc from "../IDispatchFunc";

export interface IActionCreators {
  openModal: (modal: Modal) => void;
}

const actionCreators = (dispatch: IDispatchFunc<KnownAction>) => ({
  openModal: (modal: Modal) => {
    dispatch({
      type: ActionNames.OpenModal,
      modal,
    } as IOpenModalAction);
  },
} as IActionCreators);

export default actionCreators;
