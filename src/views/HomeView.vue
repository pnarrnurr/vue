<template>
  <SideMenu :menu="subMenu" />
</template>

<script>
import SideMenu from '../components/SideMenu.vue';
export default {
  name: 'HomeView',
  data() {
    return {
      subMenu: this.$router.options.routes.find((item) => item.name == "Home").children
    }
  },
  components: {
    SideMenu
  }
}
</script>
