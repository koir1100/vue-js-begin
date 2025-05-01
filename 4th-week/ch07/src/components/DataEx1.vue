<script setup>
import { ref } from 'vue';
const count = ref(0); // basic data type
const state = ref({ // reference data type
    count: 0,
});

// console.log(count.value); // 0
// console.log(state.value.count); // 0

setTimeout(function() {
    count.value++;
}, 1000);
setTimeout(function() {
    state.count++;
}, 1000)
</script>
<template>
    <h1>count: {{ count }}</h1>
    <h1>state: {{ state.count }}</h1>
</template>