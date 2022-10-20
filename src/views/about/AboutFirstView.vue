<template>
  <main class="main">
    <SideMenu :subMenuList="subMenuList" />
    <div class="main-content">
      <div>
        <p>About First View</p>
      </div>
      <CustomInput />
    </div>
  </main>
</template>

<script>
import { SideMenu, CustomInput } from '../../components';

export default {
  name: 'AboutFirstView',
  data() {
    return {
      subMenuList: this.$router.options.routes.find((item) => item.name == "about").children
    }
  },
  components: {
    SideMenu,
    CustomInput
  }
}
</script>

<style>
.main {
  display: flex;
}

.main-content {
  padding: 20px;
  width: 100%;
}
</style>