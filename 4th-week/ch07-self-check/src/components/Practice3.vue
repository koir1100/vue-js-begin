<script setup>
import { computed, ref, provide } from 'vue';
import Practice3Child from '@/components/Practice3Child.vue';

const number = ref(11);
const doubleNumber = computed(function() {
    return number.value * 2;
})

provide('number', number);
provide('doubleNumber', doubleNumber);
</script>
<template>
    <Practice3Child />
</template>