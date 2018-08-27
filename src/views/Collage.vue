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
        v-model="sms"
        center
        clearable
        label="验证码"
        placeholder="请输入短信验证码"
      >
        <van-button class="sms-code" slot="button" size="small" type="primary">
          获取验证码
        </van-button>
      </van-field>
      <van-field
        v-model="person"
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
      <van-field
        v-model="amt"
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
    <div class="des-container">
      <strong>注意事项</strong>
      <p>此处是活动规则此处是活动规则 此处是活动规则此处是活动规则此处是活</p>
    </div>
    <div class="sub-container">
      <div class="text-content">
        总费用：<span>600</span>元
      </div>     
      <van-button type="default">去支付</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'collage',
    data() {
      return {
        mobile: '',
        sms: '',
        person: '',
        age: '',
        amt: ''
      }  
    }
  }
</script>

<style lang="scss">
  .form-container {
    color: #555;
    font-size: 14px;
    .van-cell {
      padding: 14px 18px;
      &.cms-code-content {
        padding: 11px 18px;
      }
    }
    .sms-code {
      background: #FFECD3;
      color: #FFC16F;
      border-color: #FFECD3;  
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