<template>
  <div id="app">
    <nav>
      <router-link v-for="menuItem in menuList" :key="menuItem.name" :to="menuItem.path"
        :class="{ '-active': isActiveMenu(menuItem) }">
        {{menuItem.meta.title}}
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: this.$router.options.routes.filter((route) => route.meta.menu),
    }
  },
  methods: {
    isActiveMenu: function (item) {
      if (typeof this.$router.currentRoute.meta.parent === "undefined") {
        return false;
      }
      else {
        return this.$router.currentRoute.meta.parent == item.name;
      }
    },
  }
}

</script>

<style>
body {
  margin: 0
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  height: 58px;
  background: #2c3e50;
  display: flex;
  justify-content: center;
  align-content: center;
}

nav a {
  font-weight: bold;
  color: #e2e2e2;
  padding: 20px 15px;
}

nav a.-active {
  background-color: #e2e2e2;
  color: #42b983;
}
</style>
