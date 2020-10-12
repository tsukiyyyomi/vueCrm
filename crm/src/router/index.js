import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  } ,
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'auth'},
    component: ()=> import('../views/Login.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: {layout: 'main'},
    component: ()=> import('../views/Categories.vue')
  },
  {
    path: '/record-detail',
    name: 'record-detail',
    meta: {layout: 'main'},
    component: ()=> import('../views/RecordDetail.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
