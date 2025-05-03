<script setup>
import { ref } from 'vue';
import Pracitce2Child from './Practice2Child.vue';

const childName = ref('Alias');
const handleGreeting = function(message) {
    console.log(message);
}
</script>
<template>
    <div>
        <Pracitce2Child v-bind:name="childName" v-on:greet="handleGreeting" />
    </div>
</template>