<!-- <script>
export default {
    beforeMount() {
        const name = this.$route.query.name;
        const age = this.$route.query.age;
        console.log(name);
        console.log(age);
    }
}
</script> -->
<script setup>
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
let name = "";
let age = 0;

onBeforeMount(function() {
    name = route.query.name;
    age = route.query.age;
    console.log(name);
    console.log(age);
});
</script>
<template>
    <h1>name: {{ name }}</h1>
    <h1>age: {{ age }}</h1>
</template>