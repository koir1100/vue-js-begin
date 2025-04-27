<script>
import UserProfile from '@/components/UserProfile.vue';
export default {
  components: {
    UserProfile,
  },
  data() {
    return {
      userName: '김철수',
      // age: 30,
    };
  },
  methods: {
    printHello(name, age) {
      alert(`안녕하세요! 저는 ${name} 이고, 나이는 ${age} 살 입니다.`);
    },
  },
}
</script>
<template>
  <!-- <UserProfile v-bind:user-name="userName" v-bind:age="age" /> -->
  <!-- <UserProfile v-bind:user-name="userName" /> -->
  <UserProfile v-on:print-hello="(name, age) => printHello(name, age)" />
</template>
<style>
</style>