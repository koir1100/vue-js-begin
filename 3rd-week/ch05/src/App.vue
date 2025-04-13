<script>
import FirstChild from '@/components/FirstChild.vue';
export default {
  components: {
    FirstChild,
  },
  data() {
    return {
      visible: true,
    };
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    let self = this; // this를 제대로 사용하려면 외부 변수에 this를 저장해서 사용해야 함
    setTimeout(function() {
      self.visible = false;
    }, 3000);
    // setTimeout(() => {
    //   this.visible = false; // this는 Vue 인스턴스를 가리킴
    // }, 3000);
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    let self = this;

    // 직접 참조하여 사용 (num과 doubleNum은 추후 변경 반영 X)
    console.log(`메서드 호출 전: ${self.$refs.child.num}`);
    console.log(`메서드 호출 전: ${self.$refs.child.doubleNum}`);

    // 1초 뒤 increment() 호출
    setTimeout(function () {
      self.$refs.child.increment();
      
      // 다시 직접 참조해야 변경된 값을 볼 수 있음
      console.log(`메서드 호출 후: ${self.$refs.child.num}`);
      console.log(`메서드 호출 후: ${self.$refs.child.doubleNum}`);
    }, 1000);
    // const domEl = this.$refs.domEl;
    // const text = domEl.innerText; // this.$refs.domEl.innerText와 같은 의미
    // console.log(text);
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  },
}
</script>
<template>
  <h1 ref="domEl">h1 태그</h1>
  <FirstChild ref="child" />
  <!-- <FirstChild v-if="visible"/> -->
</template>
<style scoped>
h1, p {
  color: orange !important;
}
</style>