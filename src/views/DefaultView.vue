<!-- App.vue -->
<template>
  <username-input :label="label" />
</template>

<script>
import UsernameInput from '../components/UsernameInput.vue';

export default {
  name: 'RegiserView',
  components: { UsernameInput },
  data() {
    return {
      label: 'Kullanıcı adı',
    };
  },
}
</script>