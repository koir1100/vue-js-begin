<script>
  export default {
    data() {
      return {
        firstName: 'Gildong',
        lastName: 'Hong',
        numArr: Array.from({ length: 50 }, (value, index) => index + 1), // 1부터 50까지의 숫자 배열
        inputStr: '',
        arr: [0, 1, 2],
        obj: { name: "chulsu" },
      };
    },
    computed: {
      fullName() {
        console.log('computed fullname');
        return `${this.lastName} ${this.firstName}`;
      },
      evenSum() {
        return this.numArr
          .filter((num) => num % 2 === 0)
          .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      }
    },
    watch: {
      inputStr(newValue, oldValue) {
        console.log(`old value: ${oldValue}`);
        console.log(`new value: ${newValue}`);
      },
      arr: {
        handler(newValue, oldValue) {
          console.log(`old value: ${oldValue}`);
          console.log(`new value: ${newValue}`);
        },
        deep: true,
      },
      obj: {
        handler(newValue, oldValue) {
          console.log(`old value: ${JSON.stringify(oldValue)}`);
          console.log(`new value: ${JSON.stringify(newValue)}`);
        },
        deep: true,
      },
    }
  };
</script>
<template>
  <!-- <h1>{{ lastName }} {{ firstName }}</h1>
  <h1>{{ lastName }} {{ firstName }}</h1> -->
  <!-- <h1>{{ fullName }}</h1>
  <h1>{{ fullName }}</h1> -->
  <h1>{{ evenSum }}</h1><br/>
  <input type="text" v-model="inputStr" /><br/><br/>
  <h1>{{ arr }}</h1>
  <h1>{{ obj }}</h1>
  <button v-on:click="arr.push(3)">배열 변경</button>
  <button v-on:click="obj.age = 20">객체 변경</button>
</template>
<style></style>