<script setup>
import { computed, ref } from 'vue';
const number = ref(11);
const doubleNumber = computed(function() {
    return number.value * 3;
});

// defineExpose() function -> Only access to parent component
defineExpose({
    number,
    doubleNumber,
});
</script>
<template>
    <h1>{{ number }}</h1>
    <h1>{{ doubleNumber }}</h1>
</template>