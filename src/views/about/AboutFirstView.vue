<template>
  <main class="main">
    <SideMenu :subMenuList="subMenuList" />
    About First View
  </main>
</template>

<script>
import SideMenu from '../../components/SideMenu.vue';

export default {
  name: 'AboutFirstView',
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