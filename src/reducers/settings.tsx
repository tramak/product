import { handleActions } from "redux-actions";

import { login } from 'src/actions/settings';
import { LOGIN } from "src/constants/settings";

interface ISettingsState {
  user: {
    isGuest: boolean,
  },
  isLoad: boolean,
  error: string
}

const defaultState: ISettingsState = {
  user: {
    isGuest: true,
  },
  isLoad: false,
  error: ''
};

// const settings = (state: ISettingsState = defaultState, action) => {
//   return state;
// };

console.log(123, { login: login() });
export default handleActions<ISettingsState, string>({
  [LOGIN]: (state, action) => {
    console.log({ state, action });
    return state;
  }
}, defaultState);

// export default settings;