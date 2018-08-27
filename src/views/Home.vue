<template>
  <div class="home-container">
    <van-button 
      type="default" 
      class="btn common"
      @click="startCollage"
    >
      默认按钮
    </van-button>
  </div>
</template>

<script>

  export default {
    name: 'home',
    components: {},
    methods: {
      startCollage: function() {
        this.$router.push('/collage');
      }
    }
  }
</script>

<style lang="scss">
  .home-container {
    padding-bottom: 50px;
    .btn {
      position: absolute;
      bottom: 8px;
      left: 50%;
      margin-left: -167.5px;
    }
  }    
</style>


