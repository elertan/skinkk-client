import User from '../../models/User';
import ActionNames from '../actionNames/global';
import IApiFailAction from '../IApiFailAction';

export interface ILoginAction {
  type: ActionNames.Login;
}

export interface ILoginSuccessAction {
  type: ActionNames.LoginSuccess;
  user: User;
}

export interface ILoginFailAction extends IApiFailAction {
  type: ActionNames.LoginFail;
}

type KnownAction =
  ILoginAction |
  ILoginSuccessAction |
  ILoginFailAction;

export default KnownAction;
