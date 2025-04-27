<script>
export default {
    mounted() {
        console.log(this.$parent.parentNum); // 5 출력력
        console.log(this.$parent.numOddEven); // 홀수
        console.log(this.$parent.getParentNum()); // 5 출력
    },
    data() {
        return {
            childNum: 2,
        };
    },
    computed: {
        childNumOddAdd() {
            return this.childNum % 2 === 0 ? '짝수' : '홀수';
        },
    },
    methods: {
        getChildNum() {
            return this.childNum;
        },
    },
}
</script>
<template>
    <h1>FirstChild</h1>
</template>