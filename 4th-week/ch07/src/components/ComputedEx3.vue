<script setup>
import { computed, reactive, ref } from 'vue';

const refCount = ref(2);
const reactiveCount = reactive({ count: 5 });
const refDoubleCount = computed(function() {
    return refCount.value * 2;
});

const reactiveDoubleCount = computed(function() {
    return reactiveCount.count * 2;
});

// after 1 second, refCount & reactiveCount count value update
// computed() data also auto update
setTimeout(function() {
    refCount.value = 10;
    reactiveCount.count = 20;
}, 1000);
</script>
<template>
    <h1>{{ refDoubleCount }}</h1>
    <h1>{{ reactiveDoubleCount }}</h1>
</template>