<script>
export default {
    beforeCreate() {
        const id = this.$route.params.id;
        console.log(id);
    },
}
</script>
<template>
    <h1>id: {{ $route.params.id }}</h1>
</template>