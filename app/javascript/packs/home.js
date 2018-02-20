import Vue from 'vue/dist/vue.esm';
import App from './components/app.vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#home",
    components: {
      App
    }
  });
});
