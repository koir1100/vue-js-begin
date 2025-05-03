<script setup>
import { ref, watch } from 'vue';
const count = ref(1);
watch(count, function (currentValue, prevValue) {
    console.log(currentValue, prevValue);
});
</script>
<template>
    <h1>ref: {{ count }}</h1>
    <button v-on:click="count++">ref 증가</button>
</template>