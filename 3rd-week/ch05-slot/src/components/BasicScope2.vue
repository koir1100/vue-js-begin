<script>
export default {
    data() {
        return {
            message: 'child',
            count: 15,
        };
    },
}
</script>
<template>
    <slot v-bind:message="message" v-bind:count="count"></slot>
</template>