<script setup>
import { computed, reactive, ref } from 'vue';

const refCount = ref(12);
const reactiveCount = reactive({count: 5});

// ref() data -> value attribute
const refDoubleCount = computed(function() {
    return refCount.value * 2;
});

// reactive() data -> value attribute not exist
const reactiveDoubleCount = computed(function() {
    return reactiveCount.count * 2;
});

// computed() data export -> value attribute
console.log(refDoubleCount.value);
console.log(reactiveDoubleCount.value);
</script>
<template>
    <h1>{{ refDoubleCount }}</h1>
    <h1>{{ reactiveDoubleCount }}</h1>
</template>