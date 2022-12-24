import { createApp } from "vue";
import store from "./store/index";
import App from "./App.vue";
import router from "./router";
import { axiosInstance } from "./axios";
import VueAxios from "vue-axios";

router.beforeEach(async (to) => {
  const isAuthenticated = store.state.userState.authorizationToken != null;
  console.log(isAuthenticated);
  if (!isAuthenticated && to.name !== "login") {
    return { name: "login" };
  }
});

createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axiosInstance)
  .mount("#app");
