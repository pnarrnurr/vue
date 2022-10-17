<template>
  <SideMenu :menu="subMenu" />
</template>

<script>
import SideMenu from '../components/SideMenu.vue';
export default {
  name: 'AboutView',
  data() {
    return {
      subMenu: this.$router.options.routes.find((item) => item.name == "About").children
    }
  },
  components: {
    SideMenu
  }
}
</script>
