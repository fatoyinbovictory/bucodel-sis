export const LoginStart = (StudentCredentials) => ({
  type: "LOGIN_START"
});

export const LoginSuccess = (student) => ({
  type: "LOGIN_SUCCESS",
  payload: student
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE"
});

export const Logout = () => ({
  type: "LOGOUT"
});

export const LoginAdminStart = (adminCredentials) => ({
  type: "LOGIN_START_ADMIN"
});

export const LoginAdminSuccess = (admin) => ({
  type: "LOGIN_SUCCESS_ADMIN",
  payload: admin
});

export const LoginAdminFailure = () => ({
  type: "LOGIN_FAILURE_ADMIN"
});

export const LogoutAdmin = () => ({
  type: "LOGOUT_ADMIN"
});

export const LoginFacilitatorStart = (facilitatorCredentials) => ({
  type: "LOGIN_START_FACILITATOR"
});

export const LoginFacilitatorSuccess = (facilitator) => ({
  type: "LOGIN_SUCCESS_FACILITATOR",
  payload: facilitator
});

export const LoginFacilitatorFailure = () => ({
  type: "LOGIN_FAILURE_FACILITATOR"
});

export const LogoutFacilitator = () => ({
  type: "LOGOUT_FACILITATOR"
});
