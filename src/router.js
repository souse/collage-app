import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Collage from './views/Collage.vue';
import PaySuccess from './views/PaySuccess.vue';
import MyCollage from './views/MyCollage.vue';
import Invite from './views/Invite.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/collage',
      name: 'colloage',
      component: Collage,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "collage" */ './views/Collage.vue'),
    },
    {
      path: '/success',
      name: 'paysuccess',
      component: PaySuccess,
    },
    {
      path: '/mycollage',
      name: 'mycollage',
      component: MyCollage,
    },
    {
      path: '/invite',
      name: 'invite',
      component: Invite,
    },
  ],
});
