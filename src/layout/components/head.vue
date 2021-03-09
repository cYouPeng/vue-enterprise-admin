<template>
  <div class="head-container">
    <font v-for="(item,index) in levelList" :key="index" class="crumbs">{{item.meta.title}}{{index ==levelList.length-1?'':' / ' }}</font>
  </div>
</template>

<script>
export default {
  data(){
    return{
      levelList: []
    }
  },
  watch: {
    $route(route) {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb() {
      // only show routes with meta.title
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      this.levelList = matched.filter(item => item.meta && item.meta.title)
    },
  },
  created() {
    this.getBreadcrumb()
  },
}
</script>

<style scoped>
  .head-container{
    text-align: left;
    color: black;
  }
</style>