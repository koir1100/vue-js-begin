<script>
export default {
    data() {
        return {
            count: 0,
        };
    },
    computed: {
        dobuleCount() {
            return this.count * 2;
        },
    },
    methods: {
        increment() {
            this.count++;
        },
    },
}
</script>
<template>
    <h1>Count: {{ count }}</h1>
    <h2>Double Count: {{ doubleCount }}</h2>
    <button v-on:click="increment">증가</button>
</template>