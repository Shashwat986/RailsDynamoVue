<template>
  <div id="home" class="container-fluid">
    <div class="row">
      <navbar :active-tab="tab" :user="user"></navbar>
    </div>
    <div class="row">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './navbar.vue';
export default {
  props: ['user-json'],
  components: {
    navbar: Navbar
  },
  computed: {
    tab () {
      return this.$route.meta.tab;
    },
    user () {
      if (this.userJson) {
        console.log(JSON.parse(this.userJson))
        return JSON.parse(this.userJson);
      }
      else
        return null;
    }
  }
};
</script>
