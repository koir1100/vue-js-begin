<script>
export default {
    data() {
        return {
            num: 5,
        };
    },
    computed: {
        doubleNum() {
            return this.num * 2;
        },
    },
    methods: {
        increment() {
            this.num++;
        },
    },
    // beforeUnmount() {
    //     console.log('beforeUnmount');
    // },
    // unmounted() {
    //     console.log('unmounted');
    // },
}
</script>
<template>
    <h1>{{ num }}</h1>
    <h1>First Child</h1>
    <h1>컴포넌트</h1>
    <p>내가 만든 첫 번째 컴포넌트</p>
</template>
<style>
h1 {
    color: blue;
}
p {
    color: green;
}
</style>