<template>
  <div id="nav">
    <router-link to="/">AttendanceTime</router-link> |
    <router-link to="/Home">Home</router-link> |
    <router-link to="/UserMaster">UserMaster</router-link> |
    <router-link to="/AttendanceView">AttendanceView</router-link>
  </div>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { StoreInit } from "./AppInit";
export default defineComponent(({
  setup()
  {
    new StoreInit()
  }
}));
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 100%;
  height: auto;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
