import { handleActions } from "redux-actions";
import { AnyAction } from "redux";

import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAIL } from "src/constants/settings";

interface ISettingsState {
  user: {
    isGuest: boolean;
    id?: number,
    firstName?: string,
    lastName?: string,
    phone?: string
  }
  isLoad: boolean;
  error: string;
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

export default handleActions<ISettingsState, AnyAction>({
  [FETCH_REQUEST]: (state) => {
    return {
      ...state,
      isLoad: true
    };
  },
  [FETCH_SUCCESS]: (state, action) => {
    const { user } = action.payload;
    return {
      ...state,
      user: {
        ...user,
        isGuest: false
      }
    };
  },
  [FETCH_FAIL]: (state, action) => {
    const { error } = action.payload;

    return {
      ...state,
      isLoad: false,
      error
    };
  }
}, defaultState);

// export default settings;