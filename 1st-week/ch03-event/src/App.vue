<script>
export default {
  data: function() {
    return {
      number: 0,
      name: '철수',
      gender: '남자',
      age: 20,
    };
  },
  methods: {
    // clickHandler: function () {
    //   alert('click!');
    // },
    clickHandler: function(event, message) {
      alert(message);
      console.log(event);
    },
    // onKeyupHandler: function(event) {
    //   if (event.keyCode == 13) { // 키보드 이벤트 객체에서 keyCode 속성 13은 엔터키
    //     console.log('Enter!');
    //   }
    // },
    onKeyupHandler: function () {
      console.log('Enter!');
    },
    increment: function () {
      this.number++;
    },
    decrement: function () {
      this.number > 0 ? this.number-- : this.number;
    },
  },
}
</script>
<template>
  <!-- <button type="button" v-on:dblclick="clickHandler">클릭</button> -->
  <!-- <button type="button" v-on:click="clickHandler($event)">클릭</button> -->
  <!-- <button type="button" v-on:click="($event) => clickHandler($event)">클릭</button> -->
  <button type="button" v-on:click="clickHandler($event, 'Hello')">클릭</button>
  <br/>
  <!-- <input type="text" v-on:keyup="($event) => onKeyupHandler($event)" /> -->
  <input type="text" v-on:keyup.enter="onKeyupHandler" />

  <h1 v-once>{{ number }}</h1>
  <button type="button" v-on:click="increment">증가</button>
  <button type="button" v-on:click="decrement">감소</button>

  <div v-memo="[name, gender]">
    <p>이름: {{ name }}</p>
    <p>성별: {{ gender }}</p>
    <p>나이: {{ age }}</p>
  </div>
  <button v-on:click="name = '영희'">이름 변경</button>
  <button v-on:click="gender = '여자'">성별 변경</button>
  <button v-on:click="age = 30">나이 변경</button>
</template>
<style></style>