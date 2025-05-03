<script setup>
import { reactive, watch } from 'vue';
const state = reactive({
    count: 0,
});

watch(function () {
    return state.count;
}, function (currentValue, prevValue) {
    console.log(currentValue, prevValue);
});
// watch(() => state.count,
//     (currentValue, prevValue) => {
//         console.log(currentValue, prevValue);
//     }
// );
</script>
<template>
    <h1>reactive: {{ state.count }}</h1>
    <button v-on:click="state.count++">reactive 증가</button>
</template>