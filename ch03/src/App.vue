<script>
export default {
  data: function () {
    return {
      name: '철수',
      age: 19,
      message: '<h1>Hello, Vue JS!</h1>',
      id: 'title',
      class: 'red-color',
      visible: true,
      invisible: false,
      condition: 'F',
      condition_bool: true,
      fruits: ['apple', 'banana', 'orange'],
      user: {
        name: 'John',
        age: 20,
        gender: 'male',
      }
    };
  },
}
</script>
<template>
  {{ name }} <!-- 콧수염 문법 {{  }} -->
  {{ age }}

  <p>내 이름은 {{ name }} 입니다.</p>
  <p>나이는 {{ age }} 살 입니다.</p>

  {{ 10 * 20 * 30 }}
  {{ name.toUpperCase() }}

  <!-- {{ message }} -->
  <div v-html="message"></div>
  <div v-text="message"></div> <!-- {{ message }} 와 비슷 -->

  <div v-pre>{{ message }}</div><!-- 컴파일되지 않고 단순하게 텍스트 취급 -->

  <!-- <h1 v-bind:class="class">Hello, Vue JS!</h1> -->
  <!-- <h1 :class="class">Hello, Vue JS!</h1> 축약형 더 많이 사용 -->
  
  <h1 :id :class>Hello, Vue JS!</h1><!-- HTML 태그 속성을 그대로 데이터 속성과 일치한 경우 단축 표현 가능 -->
  <!-- <h1 :id="id" :class="class">Hello, Vue JS!</h1> -->

  <p v-if="visible">이 요소는 렌더링됩니다.</p>
  <p v-if="invisible">이 요소는 렌더링되지 않습니다.</p>

  <p v-if="condition == 'A'">condition 데이터의 값은 A입니다.</p>
  <p v-else-if="condition == 'B'">condition 데이터의 값은 B입니다.</p>
  <p v-else-if="condition == 'C'">condition 데이터의 값은 C입니다.</p>
  <p v-else>어떤 조건에도 해당하지 않습니다.</p>

  <p v-show="condition">v-show 디렉티브는 조건이 참입니다.</p>
  <p v-show="!condition">v-show 디렉티브는 조건이 거짓입니다.</p>

  <h1>fruits 데이터의 반복 결과</h1>
  <ul>
    <!-- <li v-for="(fruit, index) in fruits" key="index"> -->
    <li v-for="(fruit, index) in fruits" v-bind:key="index">
      인덱스: {{ index }}, 값: {{ fruit }}
    </li>
  </ul>

  <h1>user 데이터의 반복 결과</h1>
  <ul>
    <!-- <li v-for="(value, key, index) in user" key="index"> -->
    <li v-for="(value, key, index) in user" v-bind:key="index">
      {{ index }}: {{ key }} : {{ value }}
    </li>
  </ul>
</template>
<style>
  .red-color {
    color: red;
  }
</style>