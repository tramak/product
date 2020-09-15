import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import combinedReducer from "../reducers";
// import middlewares from "../middlewares";
import rootSaga from "../sagas";

const middlewares = [];
//
const sagaMiddleware = createSagaMiddleware();

function configureStore() {
  const enhancer = composeWithDevTools(
    applyMiddleware(...middlewares, sagaMiddleware)
  );

  return createStore(
    combinedReducer,
    enhancer
  );
}

const store = configureStore();

sagaMiddleware.run(rootSaga);

// const store = createStore(combinedReducer, composeWithDevTools());

export default store;
