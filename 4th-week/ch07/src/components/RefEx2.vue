<script setup>
import { ref } from 'vue';
import RefEx2Child from '@/components/RefEx2Child.vue';

const componentRef = ref(null);

setTimeout(function() {
    console.log(componentRef.value.number);
    console.log(componentRef.value.doubleNumber);
}, 1000);
</script>
<template>
    <RefEx2Child ref="componentRef" />
</template>