import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
  path: "/index",
  name: "Index",
  component: () =>
    import("../views/index.vue")
}, {
  path: "/layout",
  name: "Layout",
  component: () =>
    import("../layout/index.vue")
}];

const router = new VueRouter({
  routes
});

export default router;