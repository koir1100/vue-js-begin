### 5장 컴포넌트 다루기

#### 5.1 컴포넌트란

#### 5.2 컴포넌트 정의하기

#### 5.3 컴포넌트 생명주기 이해하기

- 컴포넌트의 생명주기 다이어그램 - [출처](https://ko.vuejs.org/guide/essentials/lifecycle)  
  <img src="./lifecycle._trByeii.png" width="500px" />

- `setTimeout(function() { ... })`에서는 `this`가 Vue 인스턴스를 가리키지 않는 이유는? (ChatGPT 내용 정리)
  - **핵심 개념: `this`는 함수를 어떻게 호출하느냐에 따라 결정된다**

    자바스크립트에서 `this`는 **함수가 어디서 정의되었는지가 아니라, 어떻게 호출되었는지**에 따라 결정돼요.

    - 예시:

      ```js
      const obj = {
        name: "Vue",
        sayName: function() {
          console.log(this.name); // this는 obj를 가리킴
        }
      };

      obj.sayName(); // "Vue"
      ```

      근데...

      ```js
      setTimeout(obj.sayName, 1000); // undefined
      ```

      ➡️ 여기서는 `obj.sayName`이 **setTimeout 안에서 일반 함수로 호출**되기 때문에 `this`가 `obj`가 아니에요. 그냥 `window` (브라우저 기준) 혹은 `undefined` (strict mode)죠.

  ---

  - **Vue 컴포넌트에서 일어나는 문제**

    ```js
    created() {
      setTimeout(function () {
        this.visible = false; // ❌ this는 Vue 인스턴스가 아님
      }, 1000);
    }
    ```

    - 이 안의 `function () { ... }`은 **일반 함수**로서 호출됨  
    - 그래서 `this`는 `window`를 가리키거나, strict mode에서는 `undefined`  
    - 이 안에서 Vue 인스턴스 (`this.visible`)에 접근하려면 `self = this`로 바깥의 `this`를 저장해둬야 해요

  - [참고 예제](https://playcode.io/2339164)

  ---

  - **화살표 함수(Arrow Function)의 특징**

    ```js
    created() {
      setTimeout(() => {
        this.visible = false; // this는 바깥의 this(VM 인스턴스)를 유지
      }, 1000);
    }
    ```

    - **화살표 함수는 자신만의 `this`를 가지지 않아요**
    - 대신 **정의된 위치의 `this`를 그대로 "포획"**해요 (lexical scope)
    - 그래서 위 코드에서는 `this`가 Vue 인스턴스를 유지한 채 사용 가능!

  ---

  - **자바스크립트 문법에서 뭘 공부해야 할까?**

    아래 개념들을 공부하면 이 구조가 더 명확해져요:

    - **`this` 키워드**  
      → 어떻게 다르게 동작하는지: 일반 함수 vs 메서드 vs 콜백 vs strict mode  
      🔗 MDN 참고: [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this)

    - **Arrow function (`=>`)**  
      → `this`, `arguments`, `super` 등을 바인딩하지 않음  
      🔗 MDN: [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

    - **Lexical Scope (정적 스코프)**  
      → 화살표 함수가 왜 바깥의 `this`를 유지할 수 있는지에 대한 개념적 배경

  ---

  - **정리 TL;DR**

    | 종류                 | `this`는 어디서 결정됨?                        | Vue 인스턴스 접근 가능?           |
    |----------------------|-------------------------------------------------|----------------------------------|
    | 일반 함수 (`function`) | **호출 시점**에 따라 달라짐                      | ❌ (self에 따로 저장 필요)         |
    | 화살표 함수 (`=>`)      | **정의된 위치의 `this`를 포획** (lexical this) | ✅                                |
