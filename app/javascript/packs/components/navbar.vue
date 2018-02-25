<template>
  <div class="container">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <a class="navbar-brand" href="#">KriaCoin</a>
      <button class="navbar-toggler" type="button" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNav = !toggleNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div :class="['navbar-collapse', {show: toggleNav}, 'collapse']">
        <ul class="navbar-nav mr-auto">
          <li :class="getNavClass('home')">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li :class="getNavClass('market')">
            <router-link class="nav-link" to="/foo">Marketplace</router-link>
          </li>
        </ul>
        <template v-if="user">
          <span class="nav-text mr-2">
            <a href="/users/edit">{{user.username}}</a>
          </span>
          <a class="btn btn-outline-danger" href="/users/sign_out" data-method="delete">Logout</a>
        </template>
        <a v-else class="btn btn-outline-success mr-2" href="/users/sign_in">Login</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['activeTab', 'user'],
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
