<template>
<a>
  <span>{{name}}</span>
  <div class="wave"></div>
</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WaveButton',
  props: {
    name: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Righteous', cursive;
  }

  body {
    min-height: 100vh;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center
  }

  a {
    padding: 10px 20px;
    position: relative;
    display: block;
    text-decoration: none;
    overflow: hidden;
    
    &:hover {
      .wave {
        top: -230px;
      }
    }

    span {
      position: relative;
      z-index: 1;
      color: white;
      letter-spacing: 8px;
    }

    .wave {
      width: 400px;
      height: 400px;
      background-color: #444857;
      box-shadow: inset 0 0 50px rgba(0,0,0,.5);
      position: absolute;
      left: 0;
      top: -100px;
      transition: 0.4s;

      &::before, &::after {
        width: 200%;
        height: 200%;
        content: '';
        position: absolute;
        top: 0%;
        left: 50%;
        transform: translate(-200%,-200%);
      }

      &::before {
        border-radius: 40%;
        background-color: rgba(20,20,20,1);
        animation: wave 10s linear infinite;
      }

      &::after {
        border-radius: 40%;
        background-color: rgba(20,20,20,0.5);
        animation: wave 15s linear infinite;
      }
    }
  }

  @keyframes wave {
    0% {
      transform: translate(-50%,-80%) rotate(0deg);
    }

    100% {
      transform: translate(-50%,-80%) rotate(360deg);
    }
  }
</style>
