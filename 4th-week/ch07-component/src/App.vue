<script setup>
import { reactive, ref, provide, computed } from 'vue';
import LifeCycleHooks from '@/components/LifeCycleHooks.vue';
import DefineProps from '@/components/DefineProps.vue';
import DefineEmits from '@/components/DefineEmits.vue';
import Inject from '@/components/Inject.vue'

// const showComponent = ref(true);
// const toggleComponent = function() {
//   return showComponent.value = !showComponent.value;
// };

const count = ref(10);
const state = reactive({
  count: 4,
});

const countIncrement = function(num1, num2, num3) {
  return count.value = num1 + num2 + num3;
};
const stateCountIncrement = function (direct, arr) {
  return state.count = direct + arr[0];
};

const fruits = reactive(['apples', 'bananas', 'oranges']);
const fruitsText = computed(function() {
  return `I like ${fruits[0]}`
});

provide('fruitsArr', fruits);
provide('fruitsText', fruitsText);
provide('userObj', {name: 'guildong', age: 20});
</script>
<template>
  <!-- <LifeCycleHooks v-if="showComponent" /> -->
  <!-- <button v-on:click="toggleComponent">Unmount Component</button> -->
  <!-- <DefineProps v-bind:count="count" v-bind:state="state" /> -->
  <h1>{{ count }}</h1>
  <h1>{{ state.count }}</h1>
  <DefineEmits v-on:count-increment="countIncrement" v-on:state-count-increment="(arr) => stateCountIncrement(33, arr)" />
  <Inject />
</template>