<template>
  <div class="invite-container">
    <div class="share-content">
      <img src="" alt="">  
    </div>
    <h4>邀请方法</h4>
    <p class="p1">1. 长按上方图片分享到微信好友或朋友圈</p>
    <p>2. 点击右上方分享链接到微信好友或朋友圈</p>
  </div>
</template>

<script>
  import { getShareImg } from '../api/service';

  export default {
    name: 'invite',
    data() {
      return {
        src: '',
      }
    },
    async created() {
      // await getShareImg().then(res => {
      //   if (!res || res.code !=0) return;
      //   this.src = res.code.src;
      // });    
    }
  }
</script>

<style lang="scss">
  .invite-container {
    .share-content {
      width: 280px;
      height: 418px;
      border-radius: 6px;
      border: 1px solid red;
      margin: 20px auto;
    }
    h4 {
      font-size: 14px;
      color: #444;
      margin-top: 12px;
      text-align: center;
    }
    p {
      font-size: 11px;
      color: #720E10;
      width: 250px;
      height: 28px;
      line-height: 28px;
      border-radius: 13px;
      background: #F1E5D4;
      margin: 0 auto;
      text-align: left;
      padding-left: 10px;
      &.p1 {
        margin-top: 13px;
        margin-bottom: 18px;
      }
    }
  }
</style>