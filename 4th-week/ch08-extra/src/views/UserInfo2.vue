<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    id: String,
    age: Number,
});
</script>
<template>
    <h1>id: {{ props.id }}</h1>
    <h1>age: {{ props.age }}</h1>
</template>