<!-- <script>
export default {
  beforeMount() {
    const pathMatch = this.$route.params.pathMatch;
    console.log(pathMatch);
  },
};
</script> -->
<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const pathMatch = ref(null);

onBeforeMount(function() {
  pathMatch.value = route.params.pathMatch;
});
</script>
<template>
  <h1>Not Found</h1>
  <h2>pathMatch: {{ pathMatch }}</h2>
</template>
