<script>
import BasicMix from '@/components/BasicMix.vue';
export default {
    components: {
        BasicMix,
    },
}
</script>
<template>
    <BasicMix>
        <template v-slot:header="headerProps"> <!-- 구조 분해 아님 -->
            <h1>{{ headerProps.message }}</h1>
        </template>
        <template v-slot:main="{ count }"> <!-- 구조 분해 -->
            <h1>{{ count }}</h1>
        </template>
    </BasicMix>
</template>
<style>
</style>