<template>
  <div id="app" class="container">
    <p>{{ message }}</p>
    <button @click="runAjax" class="btn btn-large btn-primary">Run AJAX</button>
    <button @click="runAjaxPost" class="btn btn-large btn-primary">Run AJAX Post</button>
    <button @click="$store.commit('loading', !$store.state.loading)" class="btn btn-primary">Show Spinner</button>
    <router-link to="/foo">asdf</router-link>
    <p>{{ path }}</p>
  </div>
</template>

<script>
import { axios } from '../utils/ajax';

export default {
  data: () => {
    return {
      message: "Hello Vue!"
    };
  },
  computed: {
    path () {
      return this.$route.path;
    }
  },
  methods: {
    runAjax () {
      this.$store.dispatch('runAjax').then(({data}) => {
        this.message += data.a;
      });
    },
    runAjaxPost () {
      axios({
        url: '/api/',
        method: 'POST'
      }).then(({data}) => {
        this.message += data.a;
      });
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
