import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Bands from "@/views/Bands";
import Search from "@/views/Search";
import Artists from "@/views/Artists";
import Profile from "@/views/Profile";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/bands",
    name: "Bands",
    component: Bands
  },
  {
    path: "/search",
    name: "Search",
    component: Search
  },
  {
    path: "/artists",
    name: "Artists",
    component: Artists
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
