<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
    <nav>
        <RouterLink to="/user/info?name=mike&age=30">UserInfo</RouterLink>&nbsp;&nbsp;
        <RouterLink to="/username-mike">UserView</RouterLink>
    </nav>
    <RouterView name="header" />
    <RouterView /><!-- name="default" 와 같은 의미 -->
    <RouterView name="footer" />
</template>
<style>
</style>