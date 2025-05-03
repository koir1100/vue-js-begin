<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
    name: String,
});

const emits = defineEmits(
    ['greet']
);
const sendGreeting = function() {
    emits('greet', `Hello, ${props.name}!`);
};

</script>
<template>
    <div>
        <button v-on:click="sendGreeting">Send Greeting</button>
    </div>
</template>