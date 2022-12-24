export default {
  namespaced: true,
  state: {
    authorizationToken: localStorage.authorizationToken || "",
    user: {
      id: null,
      name: null,
      loggedIn: false,
    },
  },
  mutations: {
    setAuthorizationToken(state, token) {
      localStorage.authorizationToken = token;
      state["authorizationToken"] = token;
    },
  },
};
