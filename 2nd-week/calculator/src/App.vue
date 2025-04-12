<script>
export default {
  data() {
    return {
      output: null,
      prev: null,
      current: null,
      operator: null,
      operatorActions: {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
      },
    };
  },
  methods: {
    clear() {
      this.output = null;
      this.prev = null;
      this.current = null;
      this.operator = null;
    },
    calculate(n) {
      if (this.current == null && this.prev == null) {
        alert('숫자 먼저 입력해주세요!');
        return;
      }

      // 연산자 없이 =만 눌렀을 때는 그냥 리턴
      if (this.operator === null && n === '=') {
        return;
      }

      // 이 조건은 =일 때는 막지 않도록 처리
      if (this.operator !== null && this.current === null && n !== '=') {
        alert('연산 기호를 연속해서 누를 수 없습니다.');
        return;
      }

      this.current = Number(this.current);

      if (this.operator !== null) {
        // 여기에 오기 전에 operator는 반드시 있어야 함
        const operation = this.operatorActions[this.operator];
        if (typeof operation !== 'function') {
          alert('잘못된 연산자입니다.');
          return;
        }

        this.prev = operation(this.prev, this.current);

        if (n === '=') {
          this.output = this.prev;
          this.operator = null;
          this.current = this.prev;
        } else {
          this.output = null;
          this.operator = n;
          this.current = null;
        }
      } else {
        // 아직 연산자 누르지 않은 상태에서 +, -, *, / 눌렀을 경우
        this.output = null;
        this.operator = n;
        this.prev = this.current;
        this.current = null;
      }
    },
    userInput(n) {
      // current가 숫자인 경우 문자열로 바꿔주기
      if (typeof this.current === 'number') {
        this.current = String(this.current);
      }

      // 소수점 중복 방지
      if (n === '.' && this.current && this.current.includes('.')) {
        return;
      }

      // 소수점부터 입력 가능
      if (n === '.' && (!this.current || this.current === '')) {
        this.current = '0.';
      } else {
        this.current = this.current === null ? n : this.current + n;
      }

      this.output = this.current;
    },
    operation(e) {
      const n = e.currentTarget.value;
      if(n === 'C') {
        this.clear();
      } else if(['+', '-', '*', '/', '='].includes(n)) {
        this.calculate(n);
      } else {
        this.userInput(n);
      }
    },
  },
}
</script>
<template>
  <div class="calculator">
    <form name="forms">
      <input v-model="output" type="text" name="output" readonly />
      <input type="button" class="clear" value="C" v-on:click="operation" />
      <input type="button" class="operator" value="/" v-on:click="operation" />
      <input type="button" value="7" v-on:click="operation" />
      <input type="button" value="8" v-on:click="operation" />
      <input type="button" value="9" v-on:click="operation" />
      <input type="button" class="operator" value="*" v-on:click="operation" />
      <input type="button" value="4" v-on:click="operation" />
      <input type="button" value="5" v-on:click="operation" />
      <input type="button" value="6" v-on:click="operation" />
      <input type="button" class="operator" value="+" v-on:click="operation" />
      <input type="button" value="1" v-on:click="operation" />
      <input type="button" value="2" v-on:click="operation" />
      <input type="button" value="3" v-on:click="operation" />
      <input type="button" class="operator" value="-" v-on:click="operation" />
      <input type="button" class="dot" value="." v-on:click="operation" />
      <input type="button" value="0" v-on:click="operation" />
      <input type="button" class="operator result" value="=" v-on:click="operation" />
    </form>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.calculator {
  width: 287px;
  border: 1px solid #333;
  background-color: #ccc;
  padding: 5px;
}

.calculator form {
  display: grid;
  grid-template-columns: repeat(4, 65px);
  grid-auto-rows: 65px;
  grid-gap: 5px;
}

.calculator form input {
  border: 2px solid #333;
  cursor: pointer;
  font-size: 19px;
}

.calculator form input:hover {
  box-shadow: 1px 1px 2px #333;
}

.calculator form .clear {
  background-color: #ed4848;
}

.calculator form .operator {
  background-color: orange;
}

.calculator form .dot {
  background-color: green;
}

.calculator form input[type='text'] {
  grid-column: span 4;
  text-align: right;
  padding: 0 10px;
}

.calculator form .clear {
  grid-column: span 3;
}

.calculator form .result {
  grid-column: span 2;
}
</style>