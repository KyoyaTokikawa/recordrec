<template>
{{ dateTime }}
</template>

<script lang="ts">
import { DateTimeClass } from '@/class/DateTimeClass';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Clock',
  props:{
    KbnDateTime: String
  },
  setup(props) {
      const dateTimeClass = new DateTimeClass();
      let dateTime;
      if (props.KbnDateTime == DateTimeClass.hhmmss)
      {
        dateTime = dateTimeClass.GetTimeHHMMss();
      }
      else if (props.KbnDateTime == DateTimeClass.hhmm)
      {
        dateTime = dateTimeClass.GetTimeHHMM ();
      }
      else
      {
        dateTime = dateTimeClass.GetTimeHHMM ();
      }
      return {
          dateTime
      }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
