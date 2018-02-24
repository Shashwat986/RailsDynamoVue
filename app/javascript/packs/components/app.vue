<template>
  <div id="app" class="container">
    <p>{{ message }}</p>
    <button @click="runAjax" class="btn btn-large btn-primary">Run AJAX</button>
    <button @click="runAjaxPost" class="btn btn-large btn-primary">Run AJAX Post</button>
    <router-link to="/foo">asdf</router-link>
    <p>{{ path }}</p>
  </div>
</template>

<script>
import Rails from 'rails-ujs';

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
      Rails.ajax({
        url: '/api/',
        type: 'GET',
        success: (data) => {
          this.message += data.a;
        }
      });
    },
    runAjaxPost () {
      Rails.ajax({
        url: '/api/',
        type: 'POST',
        success: (data) => {
          this.message += data.a;
        }
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
