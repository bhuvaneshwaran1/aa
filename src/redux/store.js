import { legacy_createStore as createStore,applyMiddleware  } from 'redux';
import reducers from './reducers';
import rootSaga from './sagas';
import createSagaMiddleware from "redux-saga"

const sagaMiddleware = createSagaMiddleware()
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware))
    //composeEnhancers(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default store;
