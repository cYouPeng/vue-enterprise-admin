<template>
  <div class="container">
    <Side class="side"/>
    <div class="right-wrapper">
      <Head class="head"/>
      <Tags class="tags"/>
      <div class="main">
        <router-view />
      </div>
      
    </div>
  </div>
</template>

<script>

import Head from './components/head'
import Side from './components/side'
import Tags from './components/tags'

export default {
  components: {
    Head,
    Side,
    Tags
  }
}
</script>

<style scoped>
  .container{
    width: 100vw;
    height: 100vh;
    display: flex;
  }
  .side{
    width: 20%;
  }
  .right-wrapper{
    width: 80%;
  }
  .head{
    height: 10%;
  }
  .tags{
    height: 5%;
  }
  .main{
    height: 85%;
    overflow: hidden;
  }
</style>