<template>
  <div class="home-container">
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
    padding-bottom: 100px;
    .btn {
      position: absolute;
      bottom: 8px;
      left: 50%;
      margin-left: -335px;
    }
  }    
</style>


