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
    color: #000;
  }
  .btn {
    width: 335px;
    height: 46px !important;
    line-height: 46px !important;
    border-radius: 8px !important;
    &.common {
      background: #F7C077; 
      border-color: #F7C077;
      font-size: 16px;
      color: #fff;      
    }
  }
</style>
