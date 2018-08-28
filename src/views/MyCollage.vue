<template>
  <div class="mycollage-container">
    <div class="tipimg">
      <img src="#" alt="图片">
    </div>
    <div class="collage-content">
      <div v-if="type == 1" class="collageing-container">
        <div class="collageing-content">
          <div class="progress">
            <span class="pro" :style="{ 'width': '30%' }"></span>
            <i class="pointer"></i>
          </div>
          <div class="txt">拼团中</div>
        </div>
        <p class="time-last">剩余时间 <span>43:32:21</span></p>
      </div>
      <div v-else class="collaged">
        <span>拼团结束</span>
      </div>
      <ul class="person">
        <li v-for="p in pss" :class="p.id == undefined ? 'li-boder' : ''"></li>
      </ul> 
      <p class="time-tip">每人获得：<span>4</span> 课时</p> 
    </div>
    <div class="msg">
      <ApplyMessage />
    </div>
    <NoteMsg />
    <div class="btns">
      <van-button 
        v-if="type == 1"
        type="default" 
        class="btn common"
      >
        邀请好友拼团
      </van-button>
      <van-button 
        v-else
        type="default" 
        class="btn common"
      >
        <a href="tel:4004001234">联系客服</a>
      </van-button>
    </div>
  </div>
</template>

<script>
  import ApplyMessage from '../components/ApplyMessage.vue';
  import NoteMsg from '../components/NoteMsg.vue';

  export default {
    name: 'mycollage',
    components: {
      ApplyMessage,
      NoteMsg,
    },
    data() {
      return {
        type: 0,
        defaults: [{}, {}, {}, {}, {}],
        persons: [{ id: 1 }, { id: 2 }],
      }
    },
    computed: {
      pss: function () {
        const ps = this.persons;
        const len = ps.length;

        return ps.concat(this.defaults.slice(len));
      }
    }
  }
</script>

<style lang="scss">
  .mycollage-container {
    // padding-bottom: 62px;
    .collage-content {
      padding: 17px 32px 12px;
      background: #fff;
      .person {
        display: flex;
        justify-content: space-around;
        li {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid red;
          &.li-boder {
            border: 1px dashed #ccc;
          }
        }
      }
      p {
        font-size: 11px;
        color: #444;
        text-align: center;
        span {
          font-size: 22px;
          color: #FFC16F;
        }
        &.time-tip {
          margin-top: 19px;
        }
        &.time-last {
          margin-bottom: 19px;
          span {
            font-size: 14px;
            font-weight: bold;
          }
        }
      }
    } 
    .collaged {
      text-align: center;
      color: #FFC16E;
      font-size: 17px;
      font-weight: 500;
      margin-bottom: 12px;
      span {
        position: relative;
        padding-left: 22px;
        &::before {
          content: "";
          position: absolute;
          width: 16px;
          height: 17px;
          left: 0;
          top: 2px;
          background-image: url(../assets/icon_3.png);
          background-size: cover;
        }
      }
    }
    .collageing-content {
      display: flex;
      align-items: center;
      margin-bottom: 6px;
      .progress {
        position: relative;
        flex: 1;
        background: #fff7ea;
        height: 6px;
        line-height: 6px;
        border-radius: 3px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        .pro {
          display: block;
          background: #ffc16f;
          height: inherit; 
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
        }
        .pointer {
          position: absolute;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ffc16f;
          top: -5px;
          left: 30%;
          &::after {
            content: "";
            position: absolute;
            width: 6px;
            height: 6px;
            background: #fff;
            border-radius: inherit;
            left: 5px;
            top: 5px;
          } 
        }
      }
      .txt {
        position: relative;
        background: #fff6e8;
        width: 75px;
        height: 28px;
        line-height: 28px;
        padding-right: 15px;
        color: #FFC16E;
        font-size: 12px;
        font-weight: bold;
        border-radius: 28px;
        text-align: center;
        &::after {
          content: "";
          position: absolute;
          width: 12px;
          height: 12px;
          right: 12px;
          top: 7px;
          background-image: url(../assets/icon_2.png);
          background-size: cover;
        }
      }
    } 
    .msg {
      background: #fff;
      margin-top: 12px;
    }
    .btns {
      margin: 12px auto;
      text-align: center;
    }
    .btn {
      position: relative;
      a {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        text-align: center;
        text-decoration: none;
        color: #fff;
      }
    }
    // .btn {
    //   position: fixed;
    //   bottom: 8px;
    //   left: 50%;
    //   margin-left: -167.5px;
    // }
  }  
</style>