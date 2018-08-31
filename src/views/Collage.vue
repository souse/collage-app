<template>
  <div class="collage-container">
    <van-cell-group class="form-container">
      <van-field
        v-model="mobile"
        clearable
        label="手机号码"
        placeholder="请输入手机号"
      />
      <van-field
        class="cms-code-content"
        v-model="mobileCode"
        center
        clearable
        label="验证码"
        placeholder="请输入短信验证码"
      >
        <van-button 
          :disabled="isSend"
          class="sms-code" 
          slot="button" 
          size="small" 
          type="primary"
          @click="sentOtp"
        >
          {{otpText}}
        </van-button>
      </van-field>
      <van-field
        v-model="name"
        clearable
        label="联系人"
        placeholder="请输入联系人"
      />
      <van-field
        v-model="age"
        clearable
        label="学员年龄"
        placeholder="请输入学员年龄"
      />
      <van-cell class="van-field subject-content" title="学科">
        <ul>
          <li 
            v-for="s in subjectList" 
            :id="JSON.stringify(s)"
            :class="subed[`${s.id}`] != undefined ? 'active' : ''"
            @click="toggleSub(s)"
          >
            {{s.name}}
          </li>
        </ul>    
      </van-cell>
      <van-field
        v-model="activityPrice"
        readonly
        clearable
        label="套餐"
        placeholder="请输入套餐"
      />
      <van-field
        value="七宝馆"
        label="分馆"
        disabled
      />
    </van-cell-group>
    <NoteMsg />
    <div class="sub-container">
      <div class="text-content">
        总费用：<span>{{activityPrice}}</span>元
      </div>     
      <van-button type="default" @click="goNext">去支付</van-button>
    </div>
  </div>
</template>

<script>
  import { mapMutations, mapActions, mapState } from 'vuex';
  import { Toast } from 'vant';

  import SendOtp from '../components/SendOtp.vue';
  import NoteMsg from '../components/NoteMsg.vue';
  import { getItem, basicActivityStores } from '../utils/index';
  import { submitCollage } from '../api/service';


  // var debounce = require('lodash.debounce');

  export default {
    name: 'collage',
    components: {
      SendOtp,
      NoteMsg,
    },
    data() {
      return {
        mobile: '',
        mobileCode: '',
        name: '',
        age: '',
        activityPrice: '',
        subed: {},
        
        isSend: false,
        otpText: '获取验证码',
        timer: null,
        time: 60,
        store: getItem('store'), 
      }  
    },
    computed: {
      ...mapState([ 
        //'store',
        'subjectList' 
      ])
    },
    created: async function() {
      // const store = getItem('store');
      const { storeId, activityPrice } = this.store;

      this.activityPrice = activityPrice; 
      await this.getSubject({ storeId });
    },
    methods: {
      ...mapMutations({
        updateFroms: 'UPDATE_FORMS',
      }),
      ...mapActions([
        'getSubject'
      ]),
      sentOtp() {
        const _this = this;
        let { time, timer, otpText, isSend } = this;
        const reg = /^1[356789]\d{9}$/;

        if (!reg.test(this.mobile)) {
          Toast({ message: '手机号输入有误！', duration: 1000 });
          return;
        }

        _this.timer = setInterval(function() {
          if (0 >= time--) {
            clearInterval(_this.timer);
            _this.isSend = false;
            _this.time = 60;
            _this.timer = null;
            _this.otpText = '获取验证码';
          }else {
            _this.isSend = true;
            _this.otpText = time > 9 ? `${time}秒` : `0${time}s`; 
          }
        }, 1000);
        _this.sentOtp();
      },
      toggleSub(sub) {
        let obj = { ...this.subed }; 
        const { id } = sub;

        if (obj[`${id}`] != undefined) {
          delete obj[`${id}`];
        } else {
          obj[`${id}`] = sub;
        }

        this.subed = obj;
      },
      async submit() {
        const reg = /^1[356789]\d{9}$/;
        const { mobile, mobileCode, name, age, subed } = this;

        if (mobile == '' || !reg.test(mobile)) {
          Toast('手机号输入有误！');
          return;  
        }
        if (mobileCode == '') {
          Toast('验证码不能为空！');
          return;    
        }
        if (name == '') {
          Toast('联系人不能为空！');
          return;    
        }
        if (age == '') {
          Toast('年龄不能为空！');
          return;    
        }
        const subjectId = Object.keys(subed).join(',');
        const params = {
          method: 'POST',
          // formData: true,
          data: {
            name,
            mobile,
            mobileCode,
            age,
            subjectId,
            ...this.store,
          }
        };    
        const wxRequest = await submitCollage(params).then(res => {
          if (!res || res.code != 0) return;

          return res.data;
        });

        console.log('wxRequest', wxRequest);
      },
      goNext() {
        this.$router.push('/success');
      }
    }
  }
</script>

<style lang="scss">
  .subject-content {
    .van-cell__value {
      text-align: left;
    }
    li {
      display: inline-block;
      height: 24px;
      line-height: 24px;
      padding: 0 14px;
      border: 1PX solid #ddd;
      font-size: 11px;
      color: #bbb;
      border-radius: 12px;
      margin-right: 8px;
      margin-bottom: 14px;
      &.active {
        color: #FFC16F;
        border-color: #FFC16F;
      }
    }
  }
  .form-container {
    color: #555;
    font-size: 14px;
    .van-cell {
      padding: 14px 18px;
      &.cms-code-content {
        padding: 11px 18px;
      }
    }
    .subject-content {
      padding-bottom: 0;
    }
    .sms-code {
      background: #FFECD3;
      color: #FFC16F;
      border-color: #FFECD3;  
    }
    .van-button--disabled {
      color: #999;
      background-color: #e8e8e8;
      border: 0.02rem solid #e5e5e5;  
    }
  }
  .des-container {
    margin-top: 10px;
    padding: 13px 18px;
    background: #fff;
    strong {
      font-size: 13px;
      color: #444;
      font-weight: blod;
      margin-bottom: 12px;  
    } 
    p {
      font-size: 11px;
      color: #888;
    } 
  }  
  .sub-container {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 10px 18px;
    background: #fff;
    display: flex;
    font-size: 11px;
    > div {
      flex: 1;
      color: #666;

      span {
        font-size: 22px;
        font-weight: blod;
        color: #FFC16F;
      }
    }
    button {
      width: 108px;
      height: 34px;
      line-height: 34px;
      background: #F7C077;
      border-radius: 5px;
      border-color: #F7C077;
      font-size: 14px;
      color: #fff;
      padding: 0;
    }
  }
</style>