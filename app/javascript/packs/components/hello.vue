<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        Hello {{username}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  created () {
    this.$store.dispatch('fetchUser');
  },
  computed: {
    username () {
      return this.$store.state.username;
    }
  }
};
</script>
