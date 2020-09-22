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
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
      {
        path:'login',
        name:'login',
        component:() => import('../views/login/login.vue'),
        meta:{
          title:'登录注册页'
        }
      },
      {
        path:'hotel',
        name:'hotel',
        component:() => import('../views/hotel/hotel.vue'),
        meta:{
          title:'酒店'
        },
      },
      {
        path:'Travel',
        name:'Travel',
        component:() => import('../views/Travel/Travel.vue'),
        meta:{
          title:'旅游攻略'
        },
      },
      {
        path:'Travel/post',
        name:'Travel/post',
        component:() => import('../views/post/post.vue'),
        meta:{
          title:'写游记'
        }
      },
      {
        path:'jipiaotijiao',
        name:"jipiaotijiao",
        component:() => import('../views/tijiaojipiao/tijiaojipiao.vue')
      },
      {
        path:'Travel/get',
        name:'Travel/get',
        component:() => import('../views/get/get.vue'),
        meta:{
          title:'旅游攻略'
        }
      },
      {
        path:'jipiao',
        name:'jipiao',
        component:() => import('../views/jipiao/jipiao.vue')
      },
      {
        path:'ticket',
        name:'ticket',
        component:() => import('../views/ticket/ticket.vue'),
        meta:{
          title:'国内机票'
        }
      },
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  }import component from './../shims-vue.d';

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
    // console.log(from);
    next();
  }
);
export default router;
