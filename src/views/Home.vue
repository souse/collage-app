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
  import { mapMutations, mapState } from 'vuex';
  import { setItem } from '../utils/index';
  import { getStoreActivity } from '../api/service';
  import { propagandaImgs } from '../utils/index';

  export default {
    name: 'home',
    data() {
      return {
        // id: '', // 123 佛山馆(600), 其他区(1200)
        // name: '',
        base: '1200',
        arr: propagandaImgs,
      }
    },
    components: {},
    computed: mapState([
      'store',
    ]),
    created: async function () {
      const { query } = this.$route;
      const { storeId } = query;
      const storeActivity = await getStoreActivity(storeId).then(res => {
        if (!res || res.code != 0) return null;

        return res.data.storeActivityRole.hutongActivity; 
      });
      this.setStore({ 
        store: { 
          ...query, 
          activityPrice: storeActivity.activityPrice,
          hutongActivityId: storeActivity.id,  
        } 
      });
      this.base = `${storeActivity.activityPrice}`;
    },
    methods: {
      ...mapMutations({
        setStore: 'SET_STORE',
      }),
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


