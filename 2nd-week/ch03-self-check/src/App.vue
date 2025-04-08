<script>
export default {
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    formatNumber: function() {
      let str = this.number.toString();
      if (this.number < 10) {
        str = "0" + str;
      }

      return str;
    },
  },
  watch: {
    number(newValue, oldValue) {
      if (newValue > 10) {
        console.log("10을 초과했습니다.");
        this.number = 10;
      } else if (newValue < 0) {
        console.log("0 미만입니다.");
        this.number = 0;
      }
    },
  },
};
</script>
<template>
  {{ formatNumber }}&nbsp;
  <button v-on:click="number++">증가</button>&nbsp;
  <button v-on:click="number--">감소</button>&nbsp;
  <button type="reset" v-on:click="number = 0">초기화</button>&nbsp;
</template>
<style></style>