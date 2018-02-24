<template>
  <div id="home" class="container-fluid">
    <div class="row">
      <navbar :active-tab="tab"></navbar>
    </div>
    <div class="row">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './navbar.vue';
export default {
  components: {
    navbar: Navbar
  },
  computed: {
    tab () {
      return this.$route.meta.tab;
    }
  }
};
</script>
