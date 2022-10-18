<template>
    <label>
        {{label}}
        <input type="text" name="username" />
    </label>
</template>

<script>
export default {
    name: 'UsernameInput',
    props: {
        label: {
            type: String
        }
    }
}
</script>