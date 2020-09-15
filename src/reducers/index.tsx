import { persistCombineReducers } from "redux-persist";
import { AsyncStorage } from "react-native";
import { combineReducers } from 'redux';

import product from "./product";
import settings from "./settings";

// const persistConfig = {
//   key: "root",
//   storage: AsyncStorage,
//   blacklist: [
//     "product"
//   ]
//   // version: 1,
//   // migrate: (state) => Promise.resolve({}),
// };
//
// export default persistCombineReducers(persistConfig, {
//   // export default combineReducers({
//   product: product
// });

const rootReducer = combineReducers({
  product,
  settings
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;