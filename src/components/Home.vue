<template>
  <div class="hello">
    <h2></h2>
    <router-view></router-view>
    <footer class="index-footer-wrapper">
      <indexFooter></indexFooter>
    </footer>
  </div>
</template>

<script>
  import indexFooter from '@/components/indexFooter/indexFooter';

  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      };
    },
    components: {
      indexFooter
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .app
    position relative
    height: 100%
    width: 100%
</style>
