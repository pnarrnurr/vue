<template>
  <main class="main">
    <SideMenu :subMenuList="subMenuList" />
    <div class="main-content">
      <div>
        <p>Home First View</p>
      </div>
      <CustomInput />
    </div>
  </main>
</template>

<script>
import { SideMenu, CustomInput } from '../../components';

export default {
  name: 'HomeFirstView',
  data() {
    return {
      subMenuList: this.$router.options.routes.find((item) => item.name == "home").children
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
