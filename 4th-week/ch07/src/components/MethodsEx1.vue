<script setup>
import { ref, reactive, computed } from 'vue';

// data definition
const count = ref(2);
const state = reactive({
    count: 4,
    message: 'Hello',
});

const numberSum = computed(function() {
    return count.value + state.count;
});
const expressFunc = function() {
    return count.value += 1;
};
const arrowFunc = () => {
    state.count += 1;
};
</script>
<template>
    <h1>총합: {{ numberSum }}</h1>
    <h1>ref: {{ count }}</h1>
    <h1>reactive: {{ state.count }}</h1>
    <button v-on:click="expressFunc">ref 증가</button>
    <button v-on:click="arrowFunc">reactive 증가</button>
</template>