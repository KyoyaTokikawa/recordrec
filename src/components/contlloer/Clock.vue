<template>
<div style="margin-top: 20px; margin-left: -45px; padding: 0px; text-align: center;">
  {{dateTime}}
</div>
</template>

<script lang="ts">
import { DateTimeStore } from '@/class/store/DateTimeStore';
import { defineComponent, ComputedRef } from 'vue';


export default defineComponent({
  name: 'Clock',
  props:{
    KbnDisplayDateTime: String,
    KbnValueDateTime:String
  },
  emits: ['ChangeTime'],
  setup(props, context) {
    const dateTimeClass = new DateTimeStore();
    let dateTime: ComputedRef;
    if (props.KbnDisplayDateTime == DateTimeStore.hhmmss)
    {
      dateTime = dateTimeClass.ValHHMMSS;
    }
    else if (props.KbnDisplayDateTime == DateTimeStore.hhmm)
    {
      dateTime = dateTimeClass.ValHHMM;
    }
    else
    {
      dateTime = dateTimeClass.ValHHMMSS;
    }
    setInterval(() => {
      if (typeof(props.KbnValueDateTime) != 'undefined')
      {
        switch (props.KbnValueDateTime)
        {
          case DateTimeStore.DATETIME2:
            context.emit('ChangeTime', dateTimeClass.ValDateTime2.value);
            break;
          default:
            context.emit('ChangeTime', dateTimeClass.ValDateTime2.value);
            break;
        }
      }
      else
      {
        context.emit('ChangeTime', dateTimeClass.ValDateTime2.value);
      }
      return null;
      }
    );
    
    return {
      dateTime,
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
