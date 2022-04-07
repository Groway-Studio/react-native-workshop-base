import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const reducer = combineReducers({...reducers});

export type RootState = ReturnType<typeof reducer>;

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
