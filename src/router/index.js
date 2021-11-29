import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import Utilities from '@/views/Utilities/Index.vue';
import FileToHex from '@/views/Utilities/FileToHex.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/utilities',
      name: 'Utilities',
      component: Utilities,
    },
    {
      path: '/utilities/filetohex',
      name: 'FileToHex',
      component: FileToHex,
    },
  ],
});
