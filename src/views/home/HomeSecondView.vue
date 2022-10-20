<template>
  <main class="main">
    <SideMenu :subMenuList="subMenuList" />
    Home Second View
  </main>
</template>

<script>
import SideMenu from '../../components/SideMenu.vue';

export default {
  name: 'HomeSecondView',
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
