### 3.6 계산된 속성(computed)과 감시자 속성(watch)

#### 3.6.1 계산된 속성

```javascript
// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({ length: 5 }, (v, i) => i); // [0, 1, 2, 3, 4]

Array.prototype.reduce(callbackFn, initalValue)

function callbackFn(accumulator, currentValue, currentIndex, array) {
    // A function to execute for each element in the array.
    // Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn.
    // For the last invocation, the return value becomes the return value of reduce().
}

// callbackFn 예 (화살표 함수)
(accumulator, currentValue, currentIndex, array) => accumulator + currentValue
```

#### 3.6.2 감시자 속성

```javascript

// 참고: https://v2.vuejs.org/v2/api/#vm-watch
// 깊은 감시자 속성 사용 형식
watch: {
    // 감시할 데이터나 계산된 속성명 (ex. inputStr, arr, obj, ...)
    dataOrComputed: {
        // 변경이 감지될 때 실행할 콜백 함수
        handler(newVal, oldVal) {
            // 변경이 감지될 때 수행할 동작
        },
        // 감시할 데이터나 계산된 속성이 변경될 때마다 콜백 함수를 호출할 지 여부 (기본값: false)
        deep: false,
        // 초기 렌더링 시 콜백 함수를 호출할 지 여부 (기본값: false)
        immediate: false,
    }
}

```
