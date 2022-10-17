<template>
  <aside class="container-side">
    <nav class="side-menu">
      <div v-for="m in menu" v-bind:key="m.name">
        <a :href="m.path">{{m.name}}</a>
      </div>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "SideMenu",
  props: {
    menu: {
      type: Array
    },
  },
}
</script>