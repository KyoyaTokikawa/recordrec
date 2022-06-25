<template>
<div>
  <span>
    {{ dateTime }}
  </span>
</div>
</template>

<script lang="ts">
import { defineComponent, ComputedRef } from 'vue';
import DateTimeStore from '@/class/store/DateTimeStore';


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
    if (props.KbnDisplayDateTime == DateTimeStore.hhmmssspace)
    {
      dateTime = dateTimeClass.ValHHMMSSSpace;
    }
    else if (props.KbnDisplayDateTime == DateTimeStore.hhmm)
    {
      dateTime = dateTimeClass.ValHHMM;
    }
    else if (props.KbnDisplayDateTime == DateTimeStore.NowDay)
    {
      dateTime = dateTimeClass.ValNowDay;
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
