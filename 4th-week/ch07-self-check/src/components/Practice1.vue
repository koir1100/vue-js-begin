<script setup>
import { ref, computed, watch } from 'vue';

const count = ref(0);

const increment = function() {
    return count.value++;
};
const doubledCount = computed(function() {
    return count.value * 2;
});

watch(count, function(newVal, oldVal) {
    console.log(`Count changed from ${oldVal} to ${newVal}`);
});

</script>
<template>
    <div>
        <p>Count: {{ count }}</p>
        <p>Doubled Count: {{ doubledCount }}</p>
        <button v-on:click="increment">Increment</button>
    </div>
</template>