<template>
  <div class="home-container">
    <img 
      class="img"
      v-for="id in arr" 
      :src="'http://o9m9wx1i2.bkt.clouddn.com/collage/' + base + '/' + base + '_' + id + '.png'" alt="宣传图片">
    <van-button 
      type="default" 
      class="btn common"
      @click="startCollage"
    >
      发起拼团
    </van-button>
  </div>
</template>

<script>
  import { setItem } from '../utils/index.js';

  export default {
    name: 'home',
    data() {
      return {
        id: '', // 123 佛山馆(600), 其他区(1200)
        name: '',
        base: '1200',
        arr: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
      }
    },
    components: {},
    created: function () {
      const { query } = this.$route;
      const { id, name } = query;

      this.id = id;
      this.name = name;
      this.base = id == 123 ? '600' : '1200';
      setItem('store', query);
    },
    methods: {
      startCollage: function() {
        this.$router.push('/collage');
      }
    }
  }
</script>

<style lang="scss">
  .home-container {
    padding-bottom: 60px;
    .btn {
      position: fixed;
      bottom: 8px;
      left: 50%;
      margin-left: -167.5px;
    }
  }    
</style>


