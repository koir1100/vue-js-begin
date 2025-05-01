<script setup>
import { computed, reactive, ref } from 'vue';

const refCount = ref(2);
const reactiveCount = reactive({ count: 100 });

const refDoubleCount = computed({
    get() {
        return refCount.value * 2;
    },
    set(newValue) {
        refCount.value = newValue;
    },
});

const reactiveDoubleCount = computed({
    get() {
        return reactiveCount.count * 2;
    },
    set(newValue) {
        reactiveCount.count = newValue;
    },
});

setTimeout(function() {
    refDoubleCount.value = 10;
    reactiveDoubleCount.value = 20;  // ✅ 수정
}, 1000);
</script>

<template>
    <h1>{{ refDoubleCount }}</h1>
    <h1>{{ reactiveDoubleCount }}</h1>
</template>
