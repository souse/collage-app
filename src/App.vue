<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  import { hostNames, getItem, setItem } from './utils/index';
  import { getToken } from './api/service';

  export default {
    name: 'app',
    methods: {},
    created: async function () {
      /**
      if (!hostNames.includes(window.location.hostname)) {
        const { token } = this.$route.query;
        const COOKIE_TOKEN_KEY = sessionStorage.getItem('COOKIE_TOKEN_KEY');

        if(COOKIE_TOKEN_KEY == null) {
          if (token != undefined) { //存token
            setItem('COOKIE_TOKEN_KEY', token);
          }else {
            const params = {
              method: 'POST',
              noToken: true,
              formData: true,
              data: { 
                originUrl: encodeURIComponent(window.location.href); 
              },
            }
            const response = await getToken(params);
          }
        }
      }    
      **/
    }
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
  .img {
    width: 100%;
  }
  .tipimg {
    width: 100%;
    height: 160px;
    img {
      width: inherit;
    }
  }
  .ajax-loading {
    position: fixed;
    padding: 10px;
    top: 200px;
    left: 50%;
    margin-left: -30px;
    background-color: rgba(0, 0, 0, .5);
    border-radius: 3px;
    z-index: 999;
  }
</style>
