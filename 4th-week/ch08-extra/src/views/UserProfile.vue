<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    id: String,
});
</script>
<template>
  <h2>User Profile</h2>
  <h3>id: {{ props.id }}</h3>
</template>