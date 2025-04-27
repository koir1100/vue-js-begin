<script>
import FirstChild from '@/components/FirstChild.vue';
export default {
  components: {
    FirstChild,
  },
  mounted() {
    console.log(this.$refs.childRef.childNum); // 2
    console.log(this.$refs.childRef.childNumOddAdd); // 짝수
    console.log(this.$refs.childRef.getChildNum()); // 2
  },
  data() {
    return {
      parentNum: 5,
    };
  },
  computed: {
    numOddEven() {
      return this.parentNum % 2 === 0 ? '짝수' : '홀수';
    },
  },
  methods: {
    getParentNum() {
      return this.parentNum;
    },
  },
}
</script>
<template>
  <FirstChild ref="childRef" />
</template>
<style></style>