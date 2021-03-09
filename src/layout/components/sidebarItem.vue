<template>
  <div>
      <el-submenu v-if="item.children && item.children.length > 0" :index="resovlePath(item.path)">
        <template v-slot:title>
          <i :class="item.meta.icon"/>
          <span>{{ item.meta.title }}</span>
        </template>
        <sidebar-item v-for="chil in item.children" :key="chil.path" :item="chil" :base-path="item.path"/>
      </el-submenu>
      <router-link v-else :to="resovlePath(item.path)">
        <el-menu-item  :index="resovlePath(item.path)">
          <template v-slot:title>
            <i :class="item.meta.icon"/>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </router-link>
      
  </div>
</template>

<script>
import path from 'path'
export default {
  name: 'SidebarItem',
  props: {
    item: Object,
    basePath: String
  },
  created(){
  },
  methods: {
    resovlePath(url){
      return path.resolve(this.basePath, url)
    }
  }
}
</script>

<style>

</style>