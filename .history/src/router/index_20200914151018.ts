import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouteLocationNormalized,
  NavigationGuardNext
} from "vue-router";
import Home from "../views/Home.vue";
import layout from "../views/layout/layout.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/home",
    redirect: ""
  },
  {
    path: "/",
    name: "layout",
    component: layout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home.vue,
        meta:{
          title:"首页"
        }
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  }
];

const isPro: boolean = process.env.NODE_ENV === "prodution";
const router = createRouter({
  history: isPro
    ? createWebHistory(process.env.BASE_URL)
    : createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    document.title = to.meta.title;
    console.log(from);
    next();
  }
);
export default router;
