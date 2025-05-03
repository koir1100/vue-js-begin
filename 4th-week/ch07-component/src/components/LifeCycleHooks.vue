<script setup>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref } from 'vue';

const message = ref('Welcome to Vue 3!');
setTimeout(function() {
    message.value = 'Change';
}, 1000);

onBeforeMount(function() {
    console.log('Before component mount');
});

onMounted(function() {
    console.log('After component mount');
});

onBeforeUpdate(function() {
    console.log('Before component update');
});

onUpdated(function() {
    console.log('After component update');
});

onBeforeUnmount(function() {
    console.log('Before component unmount');
});

onUnmounted(function() {
    console.log('After component mount');
});
</script>
<template>
    <div>
        <h1>{{ message }}</h1>
    </div>
</template>
