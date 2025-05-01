<script setup>
import { computed, ref } from 'vue';
const count = ref(0);
const doubleCount = computed(function() {
    return count.value * 2;
});
const increment = function() {
    count.value++;
};
</script>
<template>
    <h1>Count: {{ count }}</h1>
    <h2>Double Count: {{ doubleCount }}</h2>
    <button v-on:click="increment">증가</button>
</template>