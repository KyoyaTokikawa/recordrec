<template>
{{ dateTime }}
</template>

<script lang="ts">
import { DateTimeClass } from '@/class/DateTimeClass';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'Clock',
  setup() {
      const dateTimeClass = new DateTimeClass();
      const dateTime = dateTimeClass.GetTimeHHMMss();
      return {
          dateTime
      }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
