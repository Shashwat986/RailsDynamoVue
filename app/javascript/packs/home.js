import Vue from 'vue/dist/vue.esm';
import router from './router';
import store from './store';
import Main from './components/main.vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#home",
    router,
    store,
    components: {
      mainEle: Main
    }
  });
});
