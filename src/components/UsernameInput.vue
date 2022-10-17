<template>
    <label>
        Username
        <input type="text" name="username" v-model="username">
    </label>
</template>

<script>
export default {
    name: 'UsernameInput',
    data() {
        return {
            username: '',
        };
    },
}
</script>