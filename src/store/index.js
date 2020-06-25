import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";

import combinedReducer from "../reducers";
// import middlewares from "../middlewares";
import rootSaga from "../sagas";

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState) {
  const enhancer = composeWithDevTools(
    applyMiddleware(...middlewares, sagaMiddleware)
  );

  return createStore(
    combinedReducer,
    // eslint-disable-next-line more/no-window

    enhancer
  );
}

const store = configureStore();

sagaMiddleware.run(rootSaga);

export default store;
