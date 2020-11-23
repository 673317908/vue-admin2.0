import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../layout/index.vue"

Vue.use(VueRouter);

const routes = [{
  path: "/",
  redirect: {
    name: "Index"
  },
  title: "首页",
  component: Layout,
  children: [{
    path: "/index",
    name: "Index",
    component: () =>
      import("../views/index.vue")
  }]
}];

const router = new VueRouter({
  routes
});

export default router;