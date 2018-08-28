<template>
  <van-button 
    :disabled="isSend"
    class="sms-code" 
    slot="button" 
    size="small" 
    type="primary"
    @click="sentOtp"
  >
    获取验证码
  </van-button>  
</template>

<script>
  export default {
    name: 'sendotp',
    data() {
      return {
        isSend: false,
        time: 59,
        timer: null,
        text: '获取验证码'  
      }
    },
    methods: {
      sentOtp() {
        
      }
    }
  }
</script>

<style>
  
</style>