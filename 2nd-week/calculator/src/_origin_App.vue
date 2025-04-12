<script>
export default {
  data() {
    return {
      output: null,   // 출력칸에 표시되어 사용자에게 노출되는 값
      prev: null,     // 이전에 입력된 값 또는 연산 결과
      current: null,  // 현재 입력된 값
      operator: null, // 연산자
    };
  },
  methods: {
    operation(e) {
      // 클릭한 버튼 값 가져오기
      const n = e.currentTarget.value; // 사용자가 입력한 숫자(실제로는 문자열) 저장

      // 초기화 로직
      if(n === 'C') {
        this.output = null;
        this.prev = null;
        this.current = null;
        this.operator = null;
        return;
      }

      // 연산 로직
      if(['+', '-', '*', '/', '='].includes(n)) {
        // 저장된 숫자가 없는데 연산 기호를 클릭한 경우
        if(!this.current && !this.prev) {
          alert('숫자를 먼저 입력하세요!');
          return;
        }

        // 사칙연산 기호를 연달아 클릭한 경우
        if(this.operator !== '' && !this.current) {
          alert('사칙연산 기호를 연달아 누를 수 없습니다!');
          return;
        }

        // 등호를 클릭해 결과를 노출한 다음 다시 등호를 클릭한 경우
        if(n === '=' && this.prev === this.current) {
          return;
        }

        this.current = Number(this.current);

        if(this.operator !== null) {
          // 사칙연산 기호면 연산 수행
          switch(this.operator) {
            case '+':
              this.prev = this.prev + this.current;
              break;
            case '-':
              this.prev = this.prev - this.current;
              break;
            case '*':
              this.prev = this.prev * this.current;
              break;
            case '/':
              this.prev = this.prev / this.current;
              break;
          }

          // 등호면 연산 결과 노출
          if(n === '=') {
            this.output = this.prev;
            this.operator = null;
            this.current = this.prev;
          } else {
            this.output = null;
            this.operator = n;
            this.current = null;
          }
        } else {
          this.output = null;
          this.operator = n;
          this.prev = this.current;
          this.current = null;
        }

        return;
      }

      this.current = this.current === null ? n : (this.current += n); // current에 (누적) 저장
      // 입력한 값이 출력칸에 표시되도록 output 데이터에 저장
      this.output = this.current;
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