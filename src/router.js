import Vue from "vue";
import Router from "vue-router";
import './assets/styles/utils.scss';
import './assets/styles/app.scss';
import Home from "./views/Home.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
