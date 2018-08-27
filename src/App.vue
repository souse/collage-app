<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style lang="scss">
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-size: 12PX;
    background: #F2F6FB;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000;
  }
  .btn {
    width: 670px;
    height: 92px;
    line-height: 92px;
    border-radius: 16px !important;
    &.common {
      background: #F7C077; 
      border-color: #F7C077;
      font-size: 32px;
      color: #fff;      
    }
  }
</style>
