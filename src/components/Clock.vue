<template>
{{ dateTime }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { DateTimeClass } from '@/class/DateTimeClass';

export default defineComponent({
  name: 'Clock',
  setup() {
      const date: DateTimeClass = new DateTimeClass();
      const dateTime = date.NowDateTime.date;
      return {
          dateTime
      }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
