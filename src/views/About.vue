<template>
  <div class="about">
    <Clock />
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Clock from '@/components/contlloer/Clock.vue'

export default defineComponent({
  name: "aaaa",
  components:{
    Clock
  }
});

</script>
