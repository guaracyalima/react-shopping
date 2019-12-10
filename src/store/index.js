import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './modules/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/rootSaga';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer);
sagaMiddleware(rootSaga);
export default store;
