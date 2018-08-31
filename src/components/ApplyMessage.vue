<template>
  <div class="applymsg-container">
    <h4>我的报名信息：</h4>
    <ul>
      <li>
        <div>联系人：</div>
        <div>{{order.name || ''}}</div>
      </li>
      <li>
        <div>联系电话：</div>
        <div>{{tel}}</div>
      </li>
      <li>
        <div>学员年龄：</div>
        <div>{{order.age || ''}}岁</div>
      </li>
      <li>
        <div>意向分馆：</div>
        <div>{{order.storeName || ''}}</div>
      </li>
      <li>
        <div>意向科目：</div>
        <div>{{order.subject == undefined ? '' : order.subject.name}}</div>
      </li>
      <li>
        <div>报名金额</div>
        <div>{{order.activityPrice || '-'}}元</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'applymessage',
    props: [ 'order' ],
    computed: {
      tel: function() {
        const { order } = this;

        return Object.keys(order).length == 0 ? '' : order.mobile.substring(0, 3) + '-' + order.mobile.substring(3, 7) + '-' + order.mobile.substring(7, 11);
      }
    },
    mounted() { }
  }  
</script>

<style lang="scss">
  .applymsg-container {
    padding: 16px 36px;
    color: #555;
    font-size: 13px;
    h4 {
      font-size: 15px;
      color: #444;
      font-weight: normal;  
      margin-bottom: 12px;
    } 
    li {
      display: flex;
      line-height: 25px;
      > div {
        flex: 1;
        &:last-child {
          text-align: right;
        }
      }
    } 
  }  
</style>