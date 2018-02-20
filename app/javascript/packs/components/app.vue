<template>
  <div id="app">
    <p>{{ message }}</p>
    <button @click="runAjax" class="btn btn-large btn-primary">Run AJAX</button>
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
  methods: {
    runAjax () {
      Rails.ajax({
        url: '/home/',
        type: 'GET',
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
