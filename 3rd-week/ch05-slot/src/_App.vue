<script>
// import CustomButton from '@/components/CustomButton.vue';
// import DefaultLayout from '@/components/DefaultLayout.vue';
import DynamicLayout from '@/components/DynamicLayout.vue';
import BasicScope from '@/components/BasicScope.vue';
import BasicScope2 from '@/components/BasicScope2.vue';
export default {
  components: {
    // CustomButton,
    // DefaultLayout,
    DynamicLayout,
    BasicScope,
    BasicScope2,
  },
  data() {
    return {
      dynamicName: 'header',
      message: 'parent',
      count: 0,
    };
  },
}
</script>
<template>
  <!-- <CustomButton>더블클릭</CustomButton> -->
  <!-- <CustomButton /> -->
  <!-- <DefaultLayout> -->
    <!-- <slot name="header">에 렌더링됨 -->
    <!-- <template v-slot:header> -->
      <!-- <h1>header</h1> -->
    <!-- </template> -->
    <!-- <slot name="main">에 렌더링됨 -->
      <!-- <template v-slot:main> -->
        <!-- <main> -->
          <!-- <h1>Main</h1> -->
        <!-- </main> -->
      <!-- </template> -->
    <!-- default 추가 -->
    <!-- <section> -->
      <!-- <h2>Section</h2> -->
    <!-- </section> -->
    <!-- <slot name="footer">에 렌더링됨 -->
    <!-- <template v-slot:footer> -->
      <!-- <footer> -->
        <!-- <h1>Footer</h1> -->
      <!-- </footer> -->
    <!-- </template> -->
  <!-- </DefaultLayout> -->
  <DynamicLayout>
    <!-- <template #[dynamicName]> -->
    <template v-slot:[dynamicName]>
      <h2>동적 슬롯</h2>
    </template>
  </DynamicLayout>
  <BasicScope>
    <h1>범위</h1>
  </BasicScope>
  <!-- <BasicScope2 v-slot="slotProps"> -->
  <BasicScope2 v-slot="{ message, count }">
    <!-- <h1>범위: {{ slotProps.message }} / {{ slotProps.count }}</h1> -->
    <h1>범위: {{ message }} / {{ count }}</h1>
  </BasicScope2>
</template>
<style scoped>
h1 {
  color: blue;
}
</style>