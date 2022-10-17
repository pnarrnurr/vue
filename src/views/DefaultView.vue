<!-- App.vue -->
<template>
  <username-input :label="label" v-model="model" />
</template>

<script>
import UsernameInput from '../components/UsernameInput.vue';

export default {
  name: 'RegiserView',
  components: { UsernameInput },
  data() {
    return {
      label: 'Username',
      model: '',
    };
  },
}
</script>