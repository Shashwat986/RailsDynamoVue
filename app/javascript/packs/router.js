import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';

import App from './components/app.vue';
import Hello from './components/hello.vue';
import e404 from './components/e404.vue';

const routes = [
  {
    path: '',
    component: App
  },
  {
    path: '/foo',
    component: Hello
  },
  {
    path: '/*',
    component: e404
  }
];

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
