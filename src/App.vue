<template>
  <div id="app">
    <nav>
      <router-link v-for="m in menu" :key="m.name" :to="m.path">{{m.name}}</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: this.$router.options.routes
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.container-side {
  width: 20%;
}

.container-side div a {
  line-height: 30px;
}
</style>
