<template>
  <main class="main">
    <SideMenu :subMenuList="subMenuList" />
    About Second View
  </main>
</template>

<script>
import SideMenu from '../../components/SideMenu.vue';

export default {
  name: 'AboutSecondView',
  data() {
    return {
      subMenuList: this.$router.options.routes.find((item) => item.name == "about").children
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
