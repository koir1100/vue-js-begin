<script>
export default {
    data() {
        return {
            uid: 'sucoding',
            upw: '',
            message: '',
            //fruits: true, // true(체크), false(미체크)
            fruits: ['orange', 'apple'],
            gender: 'male',
            selectItem: 'cafeLatte', // value 속성값이 cafeLatte인 option 태그 선택
            message2: '',
            selected: 'banana',
            price: 500,
        };
    },
    methods: {
        login() {
            console.log(`id: ${this.uid}`);
            console.log(`pw: ${this.upw}`);
        },
        printData2() {
            console.log(`id: ${this.message}`);
        },
        printData3() {
            console.log(this.fruits); // 선택된 입력 요소의 value 속성 값 출력
        },
        printData4(value) {
            console.log(value);
            //console.log(this.gender); // 선택된 입력 요소의 value 속성 값 출력
        },
        printData5() {
            console.log(this.selectItem);
        },
        // onChangeHandler($event) {
        //     this.message2 = $event.target.value;
        // },
        onChangeHandler2() {
            if (this.selected === 'banana') {
                this.price = 500;
            }
            if (this.selected === 'apple') {
                this.price = 700;
            }
        },
        onSubmitHandler(e) {
            e.preventDefault();

            // 별도의 폼 전송 처리
            console.log('onSubmit Handler!');
        },
        onKeypressHandler(e) {
            console.log(`keypress event 발생! ${e.key}`);
        },
        onKeydownHandler(e) {
            console.log(`keydown event 발생! ${e.key}`);
        },
        onKeyupHandler(e) {
            console.log(`keyup event 발생! ${e.key}`);
        },
    },
}
</script>
<template>
    <form id="loginForm">
        <label for="uid">아이디: <input type="text" id="uid" v-model="uid" /></label>&nbsp;
        <label for="upw">비밀번호: <input type="password" id="upw" v-model="upw" /></label>
        <button type="button" @click="login">로그인</button>
    </form><br/>
    <form id="loginForm2">
        <textarea v-model="message"></textarea><br/>
        <button type="button" v-on:click="printData2">데이터 출력</button>
    </form><br/>
    <form id="loginForm3">
        <label for="banana">
            <input type="checkbox" id="banana" v-model="fruits" value="banana" />banana
        </label>
        <label for="orange">
            <input type="checkbox" id="orange" v-model="fruits" value="orange" />orange
        </label>
        <label for="apple">
            <input type="checkbox" id="apple" v-model="fruits" value="apple" />apple
        </label>
        <button type="button" v-on:click="printData3">확인</button>
    </form><br/>
    <form id="loginForm4">
        <label for="male">
            <input type="radio" id="male" name="gender" v-model="gender" value="male" />male
        </label>
        <label for="female">
            <input type="radio" id="female" name="gender" v-model="gender" value="female" />female
        </label>
        <!-- <button type="button" v-on:click="printData4()">확인</button> -->
        <button type="button" v-on:click="printData4(gender)">확인</button>
    </form><br/>
    <form id="loginForm5">
        <select v-model="selectItem">
            <option value="americano">아메리카노</option>
            <option value="espresso">에스프레소</option>
            <option value="cafeLatte">카페라떼</option>
        </select>&nbsp;
        <button type="button" v-on:click="printData5">확인</button>
    </form><br/>
    <!-- <input type="text" v-model="message2" />&nbsp;
    {{ message2 }} -->
    <!-- <input type="text" v-on:input="onChangeHandler($event)" />&nbsp;
    {{ message2 }}<br/> -->
    <select v-model="selected" v-on:change="onChangeHandler2">
        <option value="banana">바나나</option>
        <option value="apple">사과</option>
    </select>&nbsp;
    가격: {{ price }} 원<br/><br/>
    <form v-on:submit="onSubmitHandler">
        <button type="submit">전송</button>
    </form>
    <input type="text" v-on:keydown="onKeydownHandler($event)" v-on:keypress="onKeypressHandler($event)" v-on:keyup="onKeyupHandler($event)" />
</template>
<style></style>