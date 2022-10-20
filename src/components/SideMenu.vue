<template>
  <aside class="aside-menu">
    <router-link v-for="subMenuItem in subMenuList" :key="subMenuItem.name" :to="subMenuItem.path"
      class="aside-menu__link">
      {{subMenuItem.meta.title}}
    </router-link>
  </aside>
</template>

<script>
export default {
  name: "SideMenu",
  props: {
    subMenuList: {
      type: Array
    },
  },
}
</script>

<style>
.aside-menu {
  height: calc(100vh - 58px);
  width: 20%;
  max-width: 200px;
  background: #a1a1a1;
}

.aside-menu__link {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  font-weight: bold;
  color: #2c3e50;
  padding: 15px 0;
}

a.aside-menu__link.router-link-exact-active,
a.aside-menu__link.router-link-active {
  background-color: #e2e2e2;
  color: #42b983;
}
</style>