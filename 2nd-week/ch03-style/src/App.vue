<script>
export default {
  data() {
    return {
      primaryColor: 'blue',
      primaryWeight: 'bold',
      primaryDecoration: 'underline',
      // primaryStyle: 'italic', // fontStyle: italic, normal, oblique 등
    };
  },
}
</script>
<template>
  <h1 v-bind:style="{ color: primaryColor, fontWeight: primaryWeight, textDecoration: primaryDecoration }">Inline Style</h1>
  <h1 class="test">External Style</h1>
</template>
<style>
  /* h1 {
    color: red;
    font-style: italic;
  } */
  @import '~/main.css';
</style>