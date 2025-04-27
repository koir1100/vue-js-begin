# 소스 설명

## 🛠 App.vue

> 전체 앱의 '중앙 컨트롤 타워' 역할입니다.

- **import**  
  컴포넌트 3개를 가져옵니다.
  - TodoHeader (탭 메뉴)
  - TodoList (할 일 목록)
  - TodoInput (입력창)

- **data()**  
  앱에서 관리할 핵심 데이터
  ```js
  todo: [],         // 할 일 목록 배열
  current: 'all',    // 현재 탭 ('all' 또는 'completed')
  isEditing: false,  // 수정 중인지 여부
  editId: null,      // 수정할 todo 아이디
  ```

- **methods**
  - `addTodo(inputMsg)`  
    새로운 todo 항목을 추가합니다.
  - `updateTab(tab)`  
    탭('전체'/'완료')을 바꿉니다.
  - `deleteTodo(id)`  
    id로 특정 todo를 삭제합니다.
  - `updateTodo(id)`  
    체크박스를 클릭하면 완료상태를 토글합니다.
  - `startEdit(todo)`  
    수정 모드 진입. 수정할 todo를 설정합니다.
  - `confirmEdit(newMsg)`  
    수정 완료하고 새로운 메시지 저장합니다.

- **computed**
  - `computedTodo`  
    현재 탭에 따라 표시할 todo 목록을 계산합니다.
  - `editTarget`  
    수정할 대상 todo를 찾아줍니다.

- **template**
  - 컴포넌트끼리 데이터를 주고 이벤트를 주고받습니다.
  - `<TodoInput>`에 slot을 사용해 버튼 문구(`등록`, `수정 완료`)를 제어합니다.

---

## 🛠 TodoHeader.vue

> 'Todo List' 타이틀 + '전체/완료' 탭을 담당합니다.

- **props**
  - `current` : 현재 탭 상태를 부모로부터 받습니다.

- **emits**
  - `update-tab` : 탭을 클릭했을 때 부모(App.vue)에 알려줍니다.

- **methods**
  - `updateTab(tab)` : 선택한 탭을 emit합니다.

- **template**
  - 탭이 현재 선택된 상태면 `.todo__tab--active` 클래스를 추가해서 강조합니다.

---

## 🛠 TodoList.vue

> 실제 할 일(todo) 목록을 보여주고, 체크/삭제/수정 기능을 담당합니다.

- **props**
  - `computedTodo` : 부모(App.vue)에서 넘겨준 필터링된 todo 리스트를 받습니다.

- **emits**
  - `delete-todo` : 삭제 요청할 때 emit
  - `update-todo` : 완료 체크 변경할 때 emit
  - `edit-todo` : 수정할 때 emit

- **methods**
  - `deleteTodo(id)`
  - `updateTodo(id)`
  - `editTodo(item)`

- **template**
  - `v-for`로 todo 항목을 돌면서 표시합니다.
  - 완료된 항목은 `line-through(취소선)` 스타일을 줍니다.
  - 완료된 todo는 수정 아이콘(✏️)을 **아예 렌더링 안 함** (v-if)

---

## 🛠 TodoInput.vue

> 새로운 todo를 추가하거나, 수정할 때 사용하는 입력창입니다.

- **props**
  - `isEditing` : 현재 수정 중인지 여부
  - `editTarget` : 수정할 대상 todo 객체

- **emits**
  - `addTodo` : 새로운 todo 등록 요청
  - `confirmEdit` : 수정 완료 요청

- **watch**
  - `editTarget`을 감시해서 수정할 때 입력창에 메시지를 자동 채워줍니다.

- **methods**
  - `handleAction()`  
    - 수정 중이면 `confirmEdit`
    - 추가 모드면 `addTodo`
    를 emit합니다.

- **template**
  - 입력창과 버튼이 있고
  - 버튼 문구는 부모(App.vue)에서 slot으로 제어합니다.

---

# 📋 전체 흐름 요약

```
[입력창]
  |
  ↓
(App.vue가 데이터 관리)
  |
  ↓
[목록에 렌더링]

(삭제, 완료, 수정 모두 이벤트를 emit 해서 부모(App.vue)가 처리)
```

- **모든 데이터는 App.vue가 가지고 있고,**
- **각 컴포넌트는 필요한 역할만 깔끔하게 수행합니다.**
- **컴포넌트 간 통신은 props / emit만 사용해서 단방향 흐름을 지킵니다.**

---

# 🎯 Vue 초심자 핵심 포인트 정리

| 개념 | 기억할 것 |
|:----|:----|
| `props` | 부모 → 자식 데이터 전달 |
| `emit` | 자식 → 부모 이벤트 전달 |
| `computed` | 데이터 가공할 때 사용 (필터링) |
| `v-bind`, `v-on` | 바인딩, 이벤트 연결 (축약 없이 풀어쓰기도 연습) |
| `slot` | 부모가 자식 컴포넌트 안 내용을 직접 지정 |
| `watch` | props나 data가 변할 때 대응 (ex: 수정 모드 입력값 채우기) |
