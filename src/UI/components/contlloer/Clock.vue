<template>
<div>
  <span>
    {{ dateTime }}
  </span>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'Clock',
  props:{
    dateTime: String
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  span {
    position: relative;
  }
  div {
    height: 50%;
    padding: 0px;
    text-align: center;
    font-size: 500%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
