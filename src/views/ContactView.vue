<template>
  <SideMenu :menu="subMenu" />
</template>

<script>
import SideMenu from '../components/SideMenu.vue';
export default {
  name: 'ContactView',
  data() {
    return {
      subMenu: this.$router.options.routes.find((item) => item.name == "Contact").children
    }
  },
  components: {
    SideMenu
  }
}
</script>
