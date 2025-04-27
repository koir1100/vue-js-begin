<script>
export default {
    // props: ['userName', 'age'], // 시용자 정의 속성인 name, age의 값을 받음
    // created() {
    //     console.log(typeof this.age); // 문자열 출력
    // },
    // props: {
    //     // name: String,  // name 속성의 값이 문자열인지 검사
    //     userName: String,  // userName 속성의 값이 문자열인지 검사
    //     age: [String, Number] // age 속성의 값이 문자열이나 숫자인지 검사
    // },
    props: {
        userName: {
            type: String,
            required: true,
            validator: function(value) {
                return value.length > 1; // 이름이 최소 두글자 이상이어야 함
            },
        },
        age: {
            type: Number,
            default: function() {
                return 10;
            },
        },
    },
    emits: ['print-hello'],
    methods: {
        parentEventCall() {
            // this.$emit('print-hello');
            this.$emit('print-hello', '철수', 30)
        },
    },
}
</script>
<template>
    <p>이름: {{ userName }}</p>
    <p>나이: {{ age }}</p>
    <button v-on:click="$emit('print-hello', '철수', 30)">클릭</button>
    <!-- <button v-on:click="parentEventCall">클릭</button> -->
</template>