
### 4장 실습: 계산기 만들기

#### 4.1 실습 내용 소개

#### 4.2 뷰 애플리케이션의 기본 구조 설정하기

#### 4.3 계산기의 UI 구성하기

- [HTML 소스](https://github.com/gilbutITbook/080384/blob/a9a4502ad5e789243907fbb8975791e090b5bb00/ch04/calculator_html/index.html)
- [CSS 소스](https://github.com/gilbutITbook/080384/blob/a9a4502ad5e789243907fbb8975791e090b5bb00/ch04/calculator_html/style.css)

#### 4.4 데이터 바인딩하고 이벤트 연결하기

#### 4.5 계산기 로직 구현하기

- **소스 설명 (with ChatGPT)**

  - **구성 요소 요약**
  
    이 코드는 총 3부분으로 나뉘어요:
    
    1. `<script>`: 계산기의 핵심 로직 (계산/입력/초기화 등)  
    2. `<template>`: 실제 화면에 보여지는 계산기 버튼과 입력창  
    3. `<style>`: 버튼 배치 및 색깔 등 디자인

  - **계산기 작동 방식 요약**

    - **데이터(data)**

      ```js
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
      ```

    - **로직 흐름 (사용자 입장에서)**
      - `userInput(n)`  
        숫자/소수점 입력 처리. 소수점 중복 방지, 숫자 이어붙이기, 출력 갱신.

      - `calculate(n)`  
        연산자나 `=` 클릭 시 동작. 예외 처리 포함.

      - `clear()`  
        전체 초기화 함수.

      - `operation(e)`  
        버튼 클릭 이벤트 핸들링 함수.

  - **예외 처리 요약**

    | 예외 상황 | 처리 방식 |
    |-----------|-----------|
    | 숫자 없이 연산자 누름 | `alert('숫자 먼저 입력해주세요!')` |
    | 연산자 두 번 연속 입력 | `alert('연산 기호를 연속해서 누를 수 없습니다.')` |
    | 연산자 없이 `=` 누름 | 무시 |
    | 연산자 오작동 | `alert('잘못된 연산자입니다.')` |
    | 소수점 중복 입력 | 무시 (`1.2.3` 안 됨) |

  - **typeof 설명**
    - `typeof`란?

      ```js
      typeof 123       // "number"
      typeof "hello"   // "string"
      typeof () => {}  // "function"
      typeof undefined // "undefined"
      ```

    - 계산기 코드에서의 사용 예
      - 잘못된 연산자 사용 방지

        ```js
        const operation = this.operatorActions[this.operator];
        if (typeof operation !== 'function') {
          alert('잘못된 연산자입니다.');
          return;
        }
        ```

      - 숫자 → 문자열 변환 (입력 이어붙이기)

        ```js
        if (typeof this.current === 'number') {
          this.current = String(this.current);
        }
        ```

      - 요약 표
        | 위치 | 코드 | 목적 | 방지하는 문제 |
        |------|------|------|----------------|
        | 연산자 계산 전 | `typeof operation !== 'function'` | 연산 함수 존재 여부 확인 | 잘못된 연산자 사용 |
        | 숫자 입력 전 | `typeof this.current === 'number'` | 숫자 → 문자열 변환 | 문자열 이어붙이기 오류 |

  - **최종 요약**
    - 숫자 입력 → `current`에 저장, 출력창 표시  
    - 연산자 입력 → `prev` 저장, `current` 초기화  
    - `=` 입력 → `prev` + `current` 계산, 결과 표시  
    - `C` → 모든 값 초기화  
    - `typeof` → 예외 방지 및 타입 안전성 확보
