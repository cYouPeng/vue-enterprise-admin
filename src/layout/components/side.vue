<template>
  <fragment>
    <el-menu :default-active="$route.path" class="el-menu-demo" :collapse="false" >
      <sidebar-item v-for="item in routes" :key="item.path" :item="item" :base-path="item.path"/>

    </el-menu>
  </fragment>
</template>

<script>

import { routes } from '../../router';
import SidebarItem from './sidebarItem'

export default {
  components: {
    SidebarItem
  },
  data() {
    return {
      activeIndex: '',
      routes
    }
  }
}
</script>

<style scoped>
  .el-menu-demo ::v-deep.el-menu-item.is-active{
    background:red
  }
</style>