<template>
  <main class="main">
    <SideMenu :subMenuList="subMenuList" />
    Home First View
  </main>
</template>

<script>
import SideMenu from '../../components/SideMenu.vue';

export default {
  name: 'HomeFirstView',
  data() {
    return {
      subMenuList: this.$router.options.routes.find((item) => item.name == "home").children
    }
  },
  components: {
    SideMenu
  }
}
</script>

<style>
.main {
  display: flex;
}
</style>
