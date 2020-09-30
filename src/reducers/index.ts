import { persistCombineReducers } from "redux-persist";
import { AsyncStorage } from "react-native";
// import { combineReducers } from 'redux';

import product from "./product";
import settings from "./settings";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  version: 1
  // blacklist: [
  //   "product"
  // ]
  // migrate: (state) => Promise.resolve({}),
};

const rootReducer = persistCombineReducers(persistConfig, {
  product,
  settings
});

// const rootReducer = combineReducers({
//   product,
//   settings
// });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;