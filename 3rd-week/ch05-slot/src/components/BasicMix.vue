<script>
export default {
    data() {
        return {
            message: 'child',
            count: 10,
        };
    },
}
</script>
<template>
    <slot name="header" v-bind:message="message"></slot>
    <slot name="main" v-bind:count="count"></slot>
    <slot name="footer"></slot>
</template>