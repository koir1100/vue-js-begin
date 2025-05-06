<script setup>
import { onBeforeMount } from 'vue';
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';
import { useRoute } from 'vue-router';
onBeforeRouteLeave(function(to, from) {
  // 동적 세그먼트 값이 변경되면 호출
});

onBeforeRouteUpdate(function(to, from) {
  // 라우트를 떠나기 전 호출
  return true; // return false;
});

const route = useRoute();
onBeforeMount(function() {
  document.title = route.meta.title;
});
</script>
<template>
  <h1>About View</h1>
</template>
