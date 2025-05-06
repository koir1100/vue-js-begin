<script>
export default {
  // 라우트 진입 전 로직
  beforeRouteEnter(to, from, next) {
    next(function(vm) {
      // vm을 통해 컴포넌트 인스턴스 참조 가능
    });
  },
  // 동적 경로의 매개변수 변경 시 실행 로직
  beforeRouteUpdate(to, from) {
    console.log('test');
  },
  // 라우트를 벗어나기 전 실행 로직
  beforeRouteLeave(to, from) {
    return true; // return false; (전환 허용, 전환 불허)
  },
  beforeMount() {
    document.title = this.$route.meta.title;
  },
}
</script>
<template>
  <h1>Home View</h1>
</template>
