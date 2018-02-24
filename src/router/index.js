import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import msite from '@/page/msite/msite';
import discover from '@/page/discover/discover';
import order from '@/page/order/order';
import profile from '@/page/profile/profile';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'msite',
          name: 'msite',
          component: msite
        },
        {
          path: 'order',
          name: 'order',
          component: order
        },
        {
          path: 'profile',
          name: 'profile',
          component: profile
        },
        {
          path: 'discover',
          name: 'discover',
          component: discover
        }
      ]
    }
  ]
});
