import { Modal } from "../../components/ModalManager";
import ActionNames from "../actionNames/modal";

export interface IOpenModalAction {
  type: ActionNames.OpenModal;
  modal: Modal;
}

type KnownAction =
  IOpenModalAction;

export default KnownAction;
