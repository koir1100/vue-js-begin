<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const pathMatch = ref(null);

onBeforeMount(() => {
    pathMatch.value = route.params.pathMatch;
});
</script>

<template>
    <h1>Not Found</h1>
    <h2>잘못된 경로: {{ pathMatch }}</h2>
</template>
