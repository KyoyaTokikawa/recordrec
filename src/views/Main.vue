<template>
<div class="col-1 md:col-12">
    <div class="card p-fluid">
        <div class="formgrid grid">
            <div class="field col">
                <h1 style="font-size: 100px;"><Clock /></h1>
            </div>
            <div class="field col">
                <div style="width: 400px; font-size: 80px;">
                    <WaveButton :name="'出勤'" />
                </div>
            </div>
            <div class="field col">
                <div style="width: 400px; font-size: 80px;">
                    <WaveButton :name="'退勤'" />
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Clock from '@/components/Clock.vue'
import WaveButton from '@/components/WaveButton.vue'; // @ is an alias to /src

export default defineComponent({
  name: "Main",
  components:{
    Clock,
    WaveButton
  },
  setup(){

      return {
      }
  }
});

</script>
