<template>
  <div class="tags-container">
    <div 
    class="item" 
    v-for="item in tagsArry" 
    :key="item.path" 
    :class="[{'is-active': item.path === $route.path}]"
    @click="$router.push(item.path)"
    >{{item.meta.title}}</div>
  </div>
</template>

<script>

import _ from "lodash";
export default {
  data(){
    return{
      tagsArry: []
    }
  },
  watch: {
    tagsArry(val){
      // const v2 = Object.assign([], val)
      // console.log(this.deepClone(val))
      // console.log(JSON.stringify(this.deepClone(val)))
      // localStorage.setItem('tag2sArray', JSON.stringify(val))
      localStorage.setItem('tagsArry', JSON.stringify(val))
    },
    $route(val){
      console.log(val)
      const index = this.tagsArry.findIndex(item => item.path === val.path)
      if(index === -1){
        const cur = {
          path: val.path,
          meta: val.meta,
          query: val.query,
          name: val.name
        }
        this.tagsArry.push(cur)
      }
    }
  },
  mounted(){
    const tagsArry = localStorage.getItem('tagsArry')
    if(tagsArry){
      this.tagsArry = JSON.parse(tagsArry)
    }
    
  },
  methods: {
  }
}
</script>

<style scoped>
  .tags-container{
    display: flex;
    color: #000;
  }
  .tags-container .item{
    width: 50px;
    height: 30px;
    border: 1px solid deepskyblue;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 5px;
    line-height: 30px;
  }
  .tags-container .is-active{
    border: 1px solid red;
  }
</style>