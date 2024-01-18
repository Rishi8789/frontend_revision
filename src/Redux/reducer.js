import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS, LOGIN_SUCCESS, LOGOUT } from "./actionType";

let initialState = {
  isLoading: false,
  isError: false,
  emps: [],
  loggedIn: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_DATA_LOADING:
      return { ...state, isLoading: true, isError: false };
    case GET_DATA_SUCCESS:
      return { ...state, isLoading: false, emps: payload };
    case GET_DATA_ERROR:
      return { ...state, isLoading: false, isError: true };
    case LOGIN_SUCCESS:
      return { ...state, loggedIn: true };
    case LOGOUT:
      return { ...state, loggedIn: false, emps: [] }; // Reset emps array on logout

    default:
      return state;
  }
};
