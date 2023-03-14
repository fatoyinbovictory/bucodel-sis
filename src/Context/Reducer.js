export const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        student: null,
        isFetching: true,
        error: false
      };
    case "LOGIN_SUCCESS":
      return {
        student: action.payload,
        isFetching: false,
        error: false
      };
    case "LOGIN_FAILURE":
      return {
        student: null,
        isFetching: false,
        error: true
      };
    case "LOGOUT":
      return {
        student: null,
        isFetching: false,
        error: false
      };
    default:
      return state;
  }
};

export const ReducerAdmin = (state, action) => {
  switch (action.type) {
    case "LOGIN_START_ADMIN":
      return {
        admin: null,
        isFetching: true,
        error: false
      };
    case "LOGIN_SUCCESS_ADMIN":
      return {
        admin: action.payload,
        isFetching: false,
        error: false
      };
    case "LOGIN_FAILURE_ADMIN":
      return {
        admin: null,
        isFetching: false,
        error: true
      };
    case "LOGOUT_ADMIN":
      return {
        admin: null,
        isFetching: false,
        error: false
      };
    default:
      return state;
  }
};

export const ReducerFacilitator = (state, action) => {
  switch (action.type) {
    case "LOGIN_START_FACILTATOR":
      return {
        facilitator: null,
        isFetching: true,
        error: false
      };
    case "LOGIN_SUCCESS_FACILITATOR":
      return {
        facilitator: action.payload,
        isFetching: false,
        error: false
      };
    case "LOGIN_FAILURE_FACILITATOR":
      return {
        facilitator: null,
        isFetching: false,
        error: true
      };
    case "LOGOUT_FACILITATOR":
      return {
        facilitator: null,
        isFetching: false,
        error: false
      };
    default:
      return state;
  }
};
