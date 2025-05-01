<script setup>
import { reactive } from 'vue';
// const state = reactive(0); // value cannot be made reactive: 0
const state = reactive({ // Only reference type enable
    count: 0,
})

console.log(state.count); // 0
setTimeout(function() {
    state.count++;
}, 1000);
</script>
<template>
    <h1>state: {{ state.count }}</h1>
</template>