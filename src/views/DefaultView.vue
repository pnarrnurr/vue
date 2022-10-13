<template>
  <div class="defaultPage">
    <h1>This is an {{pageName}} page</h1>
  </div>
</template>

<script>
export default {
  name: "DefaultView",
  props: {
    pageName: {
      type: String,
      required: true,
    },
  },
}
</script>