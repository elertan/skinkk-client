import User from '../../models/User';
import ActionNames from '../actionNames/global';
import KnownAction, {
  ILoginAction,
  ILoginFailAction,
  ILoginSuccessAction,
} from '../actions/global';
import IDispatchFunc from '../IDispatchFunc';

export interface IActionCreators {
  login: (username: string, password: string) => Promise<void>;
}

export default (dispatch: IDispatchFunc<KnownAction>) => ({
  login: async (username: string, password: string) => {
    dispatch({
      type: ActionNames.Login,
    } as ILoginAction);
    const user = new User();
    user.firstname = "Test";
    user.lastname = "Test";
    user.username = "elertan";

    // TODO: Add login logic

    dispatch({
      type: ActionNames.LoginSuccess,
      user,
    } as ILoginSuccessAction);
  },
} as IActionCreators);
