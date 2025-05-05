<script>
export default {
    methods: {
        navigateToHome() {
            this.$router.push('/');
        },
        replaceWithAbout() {
            this.$router.replace('/about');
        },
        goBack() {
            this.$router.go(-1);
        },
        goForward() {
            this.$router.go(1);
        },
    },
}
</script>
<template>
    <nav>
        <a href="#" v-on:click="$router.push('/')">.push</a>&nbsp;
        <a href="#" v-on:click="$router.replace('/about')">.replace</a>&nbsp;
        <a href="#" v-on:click="$router.go(-1)">.go</a>&nbsp;
        <a href="#" v-on:click="$router.forward">.forward</a>&nbsp;
        <a href="#" v-on:click="$router.back()">.back</a><br/>

        <!-- /about -->
        <RouterLink :to="{name: 'about'}">About</RouterLink>&nbsp;
        <!-- /user/mike -->
        <RouterLink :to="{name: 'user-profile', params: {id: 'mike'}}">user</RouterLink>&nbsp;
        <!-- /about?lang=ko -->
        <RouterLink :to="{name: 'about', query: {lang: 'ko'}}">about</RouterLink>&nbsp;
        <!-- /user/mike?lang=ko -->
        <RouterLink :to="{name: 'user-profile', params: {id: 'mike'}, query: {lang: 'ko'}}">user</RouterLink>
    </nav>
</template>