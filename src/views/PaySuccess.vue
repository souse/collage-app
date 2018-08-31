<template>
  <div class="paysuccess-container">
    <div class="suc-content">
      <div class="title">
        <span>支付成功</span>
      </div>
      <ApplyMessage :order="order" />
    </div>
    <div class="qc-content">
      <p>请扫码关注秦汉胡同公众号，获取拼团最新消息</p>
      <img src="../assets/icon_qc.jpeg" alt="二维码">
    </div>
    <van-button 
      class="btn common" 
      type="default" 
      @click="goNext"
    >
      查看我的拼团
    </van-button>
  </div>
</template>

<script>
  import { getOrder } from '../api/service';
  import ApplyMessage from '../components/ApplyMessage.vue';

  export default {
    name: 'paysuccess',
    data() {
      return {
        activityOrderId: 4,
        order: {}
      }
    },
    components: {
      ApplyMessage,
    },
    async mounted() {
      const _this = this;

      await getOrder(_this.activityOrderId).then(res => {
        if (!res || res.code != 0) return;

        _this.order = res.data.order;
      });  
    },
    methods: {
      goNext: function() {
        this.$router.push('/mycollage');
      }
    }
  }
</script>

<style lang="scss">
  .paysuccess-container {
    .suc-content {
      background: #fff;
      margin: 16px 10px;
      border-radius: 8px;
      box-shadow: 0 2px 0 rgba(220, 220, 220, .5);
      .title {
        position: relative;
        font-size: 18px;
        color: #FFC16F;
        text-align: center;
        font-weight: 500;
        padding: 17px 0;
        border-bottom: 1px dashed #ddd;
        &::before,
        &::after {
          content: "";
          position: absolute;
          width: 10px;
          height: 10px;
          bottom: -5px;
          background: #F2F6FB;
        }
        &::before {
          left: -5px;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
        &::after {
          right: -5px;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
      }
      span {
        position: relative;
        padding-left: 35px;
        &::before {
          content: "";
          position: absolute;
          width: 29px;
          height: 20px;
          left: 0;
          top: 1px;
          background-image: url('../assets/icon_1.png');
          background-size: cover;
        }
      }
    } 
    .qc-content {
      margin-top: 40px;
      text-align: center;
      p {
        font-size: 13px;
        color: #444;
        margin-bottom: 20px;
      }
      img {
        width: 140px;
        height: 140px;
        border: 2px solid #F3B765;
        border-radius: 6px;
      }
    } 
    .common {
      position: absolute;
      bottom: 8px;
      left: 50%;
      margin-left: -167.5px;  
    }
  }  
</style>