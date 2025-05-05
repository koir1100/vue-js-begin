<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useRouter } from 'vue-router';

const router = useRouter();
const navigateToHome = function() {
    router.push('/');
};
const replaceWithAbout = function() {
    router.replace('/about');
};
const go = function() {
    router.go(1);
};
const goForward = function() {
    router.forward();
};
const goBack = function() {
    router.back();
};
</script>
<template>
    <nav>
        <a href="#" v-on:click.prevent="router.push('/')">.push</a>&nbsp;
        <a href="#" v-on:click.prevent="router.replace('/about')">.replace</a>&nbsp;
        <a href="#" v-on:click.prevent="router.go(-1)">.go</a>&nbsp;
        <a href="#" v-on:click.prevent="router.forward">.forward</a>&nbsp;
        <a href="#" v-on:click.prevent="router.back">.back</a>
    </nav>
</template>