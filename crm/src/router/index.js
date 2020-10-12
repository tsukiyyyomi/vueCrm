import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/",
    name: "home",
    meta: {layout: 'main'},
    component: ()=> import('../views/Home.vue')
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
  },
  {
    path: '/history',
    name: 'history',
    meta: {layout: 'main'},
    component: ()=> import('../views/History.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
