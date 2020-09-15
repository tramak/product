import { createAction } from "redux-actions";
import { LOGIN, FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAIL } from "src/constants/settings";

export const login = createAction(LOGIN);
export const fetchRequest = createAction(FETCH_REQUEST);
export const fetchSuccess = createAction(FETCH_SUCCESS);
export const fetchFail = createAction(FETCH_FAIL);
