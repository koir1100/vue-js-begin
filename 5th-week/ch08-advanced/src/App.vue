<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
  <nav>
    <RouterLink to="/">home</RouterLink>&nbsp;
    <RouterLink to="/about">about</RouterLink>
  </nav>
  <RouterView />
</template>
