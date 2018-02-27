<template>
  <div class="container-fluid">
    <div class="row">
      <navbar :active-tab="tab" :user="user"></navbar>
    </div>
    <div class="row">
      <spinner v-if="showSpinner"></spinner>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './navbar.vue';
import Spinner from './spinner.vue';
export default {
  props: ['user-json'],
  components: {
    navbar: Navbar,
    spinner: Spinner
  },
  created () {
    if (this.userJson) {
      this.$store.commit('user', JSON.parse(this.userJson));
    }
  },
  computed: {
    tab () {
      return this.$route.meta.tab;
    },
    user () {
      if (this.userJson)
        return JSON.parse(this.userJson);
      else
        return null;
    },
    showSpinner () {
      return this.$store.state.loading;
    }
  }
};
</script>
