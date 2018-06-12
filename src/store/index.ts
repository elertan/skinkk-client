import { History } from 'history';
import {
  push,
  routerMiddleware,
  routerReducer,
} from 'react-router-redux';
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
// import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';

import * as Champions from './Champions';
import * as Global from './Global';

export {
  Global as GlobalStore,
  Champions as ChampionsStore,
};

export interface IAppState {
  global: Global.State;
  champions: Champions.State;
}

export const reducers = {
  global: Global.reducer,
  champions: Champions.reducer,
};

const allReducers = combineReducers<IAppState>(reducers);

export default (initialState: IAppState, routerHistory: History) => {
  const router = routerMiddleware(routerHistory);
  const createStoreWithMiddleware = compose(
    applyMiddleware(thunk),
    applyMiddleware(router),
  )(createStore);
  return createStoreWithMiddleware(allReducers);
};
