<template>
  <div class="container">
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <a class="navbar-brand" href="#">KriaCoin</a>
      <button class="navbar-toggler" type="button" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNav = !toggleNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div :class="['navbar-collapse', {show: toggleNav}, 'collapse']" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li :class="getNavClass('home')">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li :class="getNavClass('market')">
            <router-link class="nav-link" to="/foo">Marketplace</router-link>
          </li>
        </ul>
        <button class="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['activeTab'],
  data: () => {
    return {
      toggleNav: false
    };
  },
  methods: {
    getNavClass (tabName) {
      return ['nav-item', { active: (this.activeTab == tabName) }];
    }
  }
};
</script>
