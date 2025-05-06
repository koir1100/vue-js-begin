<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <nav>
        <RouterLink to="/books">도서 목록</RouterLink>
    </nav>
    <RouterView />
</template>
