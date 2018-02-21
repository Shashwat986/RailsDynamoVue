import Vue from 'vue/dist/vue.esm';
import App from './components/app.vue';
import router from './router'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#home",
    router
  });
});
