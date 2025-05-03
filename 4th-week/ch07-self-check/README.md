## Vue Composition API 기본 개념 정리

### 🏗 **Composition API란?**

Composition API는 Vue 3에서 새로 도입된 **컴포넌트 로직을 더 유연하고 명확하게 구성**할 수 있는 API입니다.  
기존 Options API (`data`, `methods`, `computed`, `watch`)를 하나의 큰 setup 함수 안에서 조립하듯 사용할 수 있도록 바꾼 것이 핵심입니다.

---

### 🛠 **핵심 개념 정리**

**1️⃣ ref() — 반응형 값 만들기**

* `ref`는 기본형 값(숫자, 문자열 등)을 반응형으로 감싸는 역할.
* `.value`로 읽고 씀.
* 템플릿 안에서는 자동 언래핑되어 `.value` 없이 바로 사용 가능.

예:

```js
const count = ref(0);
count.value++;
```

**2️⃣ computed() — 계산된 값 만들기**

* 다른 반응형 값에 의존해 자동으로 계산되는 값.
* 캐싱되어 값이 변할 때만 재계산.
* 역시 `.value`로 접근 (템플릿에서는 자동 언래핑).

예:

```js
const doubledCount = computed(() => count.value * 2);
```

**3️⃣ watch() — 값 변화 감지**

* 특정 반응형 값의 변화 시점을 감지해 콜백 실행.
* `watch(ref, callback)` 또는 `watch(() => ref.value, callback)` 형태로 사용.

예:

```js
watch(count, (newVal, oldVal) => {
  console.log(`Count changed from ${oldVal} to ${newVal}`);
});
```

**4️⃣ provide / inject — 상하위 컴포넌트 간 값 전달**

* 부모에서 `provide`로 제공한 값을 하위 컴포넌트에서 `inject`로 받음.
* Composition API에서는 `provide('key', value)`와 `inject('key')` 형태로 사용.
* `ref`를 제공하면 자식에서도 `.value`로 접근.

**5️⃣ \<script setup\> — Composition API 전용 문법**

* `setup()` 함수 없이 바로 Composition API 코드를 작성할 수 있는 SFC(Single File Component) 전용 문법.
* 불필요한 `return` 없이 템플릿에 변수·함수 자동 노출.
* `defineProps`, `defineEmits`로 props·emit을 선언.

---

### 🌟 Composition API의 장점

✅ 로직을 기능별로 묶기 쉽다 (Options API는 속성별로만 나뉨)  
✅ 코드 재사용성이 높다 (composables로 추출 가능)  
✅ TypeScript 친화적이다  
✅ IDE 자동 완성과 타입 추론이 강력하다  

---

### 📦 지금까지 실습에서 배운 것들

* ref/computed/watch의 기본 사용법
* 부모-자식 간 emit, provide/inject 데이터 전달
* \<script setup\>의 깔끔한 문법  
* Composition API 전환에서 주의할 점 \(예: `this` 제거, `.value` 사용\)

---

**Composition API vs Options API 비교 요약 표**를 아래에 정리했습니다.

### 📊 **Vue Options API vs Composition API 개념 비교**

| 개념/기능              | **Options API**                                     | **Composition API** (with `<script setup>`)                              |
| ------------------ | --------------------------------------------------- | ------------------------------------------------------------------------ |
| **데이터 정의**         | `data() { return { count: 0 } }`                    | `const count = ref(0)`                                                   |
| **계산된 속성**         | `computed: { doubled() { return this.count * 2 } }` | `const doubled = computed(() => count.value * 2)`                        |
| **메서드 정의**         | `methods: { increment() { this.count++ } }`         | `function increment() { count.value++ }`                                 |
| **값 감시 (watch)**   | `watch: { count(newVal, oldVal) { ... } }`          | `watch(count, (newVal, oldVal) => { ... })`                              |
| **props 선언**       | `props: ['name']` 또는 `{ name: String }`             | `const props = defineProps(['name'])` 또는 `defineProps({ name: String })` |
| **emit 이벤트**       | `this.$emit('event')`                               | `const emit = defineEmits(['event']); emit('event')`                     |
| **provide/inject** | `provide: { key: val }` / `inject: ['key']`         | `provide('key', val)` / `inject('key')`                                  |
| **템플릿에서 값 접근**     | `this.count`                                        | `<script setup>`에서는 `count` (자동 노출), `.value`는 자동 언래핑                    |
| **로직 분리**          | 속성별 분리 (data, methods, computed 등)                  | 기능별 분리 (함수, composables로 묶음)                                             |
| **TypeScript 지원**  | 제한적                                                 | 강력, 타입 추론 및 IDE 지원 강화                                                    |
| **코드 재사용성**        | 믹스인, 확장 등                                           | composable 함수, 재사용 가능한 로직 블록                                             |

---

### 🌟 **핵심 차이**

✅ Composition API는 **기능 단위로 로직을 묶을 수 있어** 큰 컴포넌트나 복잡한 로직에서 유지보수가 쉽습니다.  
✅ `<script setup>`는 Composition API를 더 간결하게 쓰게 해주는 **컴파일러 전용 문법**으로, 불필요한 `setup()` 함수나 `return` 없이도 바로 사용 가능합니다.  
✅ Options API는 여전히 간단한 컴포넌트에서는 충분히 좋지만, 로직이 점점 복잡해지면 코드가 흩어지고 섞이는 단점이 있습니다.  

