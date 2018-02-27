<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        Hello {{username}}
      </div>
      <div class="col-3">
        <button class="btn btn-primary" @click="doStuff">Hide Email</button>
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
    this.$store.dispatch('fetchDatas', ['user']);
  },
  computed: {
    username () {
      return this.$store.state.user ? this.$store.state.user.username : "Peeps";
    }
  },
  methods: {
    doStuff() {
      this.$store.commit('testObj');
    }
  }
};
</script>
