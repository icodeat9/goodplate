import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
  },
  {
    path: "/inventory",
    name: "inventory",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/InventoryView.vue"),
  },
  {
    path: "/pos",
    name: "pos",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/POSView.vue"),
  },
  {
    path: "/table/:id",
    name: "table",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TableView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


export default router;
