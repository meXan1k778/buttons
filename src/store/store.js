import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {whatchFetchPosts} from '../sagas/saga'

import Reducer from '../reducers/rootReducer/rootReducer'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(Reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(whatchFetchPosts);
export default store;
