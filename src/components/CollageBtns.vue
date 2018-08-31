<template>
  <div class="btns">
    <van-button 
      v-if="flag == 1"
      type="default" 
      class="btn common"
    >
      邀请好友拼团
    </van-button>
    <van-button 
      v-else-if="flag == 2"
      type="default" 
      class="btn common"
    >
      <a href="tel:4004001234">联系客服</a>
    </van-button>
    <van-button 
      v-else-if="flag == 3"
      type="default" 
      class="btn common"
    >
      我要参团
    </van-button>
  </div>  
</template>

<script>
  export default {
    name: 'CollageBtns',
    props: ['myOrder', 'group'],
    computed: {
      flag: function() {
        // 1: 邀请好友拼团
        // 2: 联系客服
        // 3: 我要拼团
        const { group, myOrder } = this;

        if (group != null && group.groupStatus == 'STARTING') {
          if (myOrder != '' && myOrder != null) {
            return 1;
          }
          if (myOrder == null) {
            return 3;
          }
        } else if (group != null && group.groupStatus == 'SUCCESS') {
          if (myOrder != '' && myOrder != null) {
            return 2;
          }
        }
        return '';
      }
    }
  }
</script>