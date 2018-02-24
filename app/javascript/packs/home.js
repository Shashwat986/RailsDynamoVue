import Vue from 'vue/dist/vue.esm';
import router from './router'
import Main from './components/main.vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#home",
    router,
    components: {
      mainEle: Main
    }
  });
});
