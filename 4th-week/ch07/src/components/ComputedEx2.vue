<script setup>
import { computed, reactive, ref } from 'vue';

const refCount = ref(10);
const reactiveCount = reactive({ count: 15 });
const refDoubleCount = computed(function() {
    return refCount.value * 2;
});

const reactiveDoubleCount = computed(function() {
    return reactiveCount.count * 2;
});

setTimeout(function() {
    refDoubleCount.value = 20; // after 1 second, warning
}, 1000);
</script>
<template>
    <h1>{{ refDoubleCount }}</h1>
    <h1>{{ reactiveDoubleCount }}</h1>
</template>