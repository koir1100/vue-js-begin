<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits([
    'count-increment', 'state-count-increment'
]);

const increment = function() {
    emit('count-increment', 10, 20, 30);
};
</script>
<template>
    <button v-on:click="increment">count 증가</button>
    <button v-on:click="emit('state-count-increment', [50])">state.count 증가</button>
</template>