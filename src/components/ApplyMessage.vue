<template>
  <div class="applymsg-container">
    <h4>我的报名信息：</h4>
    <ul>
      <li>
        <div>联系人：</div>
        <div>张小姐</div>
      </li>
      <li>
        <div>联系电话：</div>
        <div>135-1234-9087</div>
      </li>
      <li>
        <div>学员年龄：</div>
        <div>13岁</div>
      </li>
      <li>
        <div>意向分馆：</div>
        <div>星爆馆</div>
      </li>
      <li>
        <div>意向科目：</div>
        <div>国画</div>
      </li>
      <li>
        <div>报名金额</div>
        <div>600元</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'applymessage',

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