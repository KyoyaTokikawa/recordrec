<template>
<div style="margin-top: 20px; margin-left: -45px; padding: 0px; text-align: center;">
  {{dateTime}}
</div>
</template>

<script lang="ts">
import { DateTimeClass } from '@/class/DateTimeClass';
import { defineComponent, ComputedRef } from 'vue';


export default defineComponent({
  name: 'Clock',
  props:{
    KbnDisplayDateTime: String,
    KbnValueDateTime:String
  },
  emits: ['ChangeTime'],
  setup(props, context) {
    const dateTimeClass = new DateTimeClass();
    let dateTime: ComputedRef;
    if (props.KbnDisplayDateTime == DateTimeClass.hhmmss)
    {
      dateTime = dateTimeClass.GetTimeHHMMss();
    }
    else if (props.KbnDisplayDateTime == DateTimeClass.hhmm)
    {
      dateTime = dateTimeClass.GetTimeHHMM ();
    }
    else
    {
      dateTime = dateTimeClass.GetTimeHHMMss();
    }
    setInterval(() => {
      if (typeof(props.KbnValueDateTime) != 'undefined')
      {
        switch (props.KbnValueDateTime)
        {
          case DateTimeClass.DATETIME2:
            context.emit('ChangeTime', dateTimeClass.GetValDATETIME2().value);
            break;
          default:
            context.emit('ChangeTime', dateTimeClass.GetValDATETIME2().value);
            break;
        }
      }
      else
      {
        context.emit('ChangeTime', dateTimeClass.GetValDATETIME2().value);
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
