<script setup>
import { reactive, ref, watchEffect } from 'vue';

const count = ref(1);
const state = reactive({
    count: 3,
});

watchEffect(function() {
    console.log(count.value);
    console.log(state.count);
});
</script>
<template>
    <h1>ref: {{ count }}</h1>
    <button v-on:click="count++">ref 증가</button>
    <h1>reactive: {{ state.count }}</h1>
    <button v-on:click="state.count++">reactive 증가</button>
</template>