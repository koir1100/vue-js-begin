<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const id = route.params.id;
console.log(id);
</script>
<template>
    <h1>id: {{ id }}</h1>
</template>