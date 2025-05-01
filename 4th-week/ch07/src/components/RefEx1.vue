<script setup>
import { ref } from 'vue';
const inputRef = ref(null);

setTimeout(function () {
    console.log(inputRef.value); // h1 tag DOM object
    console.log(inputRef.value.innerText); // DOM object attribute, method both OK
}, 1000);
</script>
<template>
    <h1 ref="inputRef">Hello, Vue!</h1>
</template>