import ApiError from "../../api/ApiError";
import User from "../../models/User";

export interface ILoginSuccessState {
  loginSuccess?: User;
}

export interface ILoginFailState {
  loginFail?: ApiError;
}

type AppState =
  ILoginSuccessState &
  ILoginFailState;

export default AppState;
