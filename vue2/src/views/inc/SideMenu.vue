<template>
  <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
  >
    <router-link to="/index">
      <el-menu-item index="0">
        <template #title>
          <el-icon>
            <location/>
          </el-icon>
          <span>首页</span>
        </template>
      </el-menu-item>
    </router-link>
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <location/>
        </el-icon>
        <span>系统管理</span>
      </template>
      <router-link to="/sys/users">
        <el-menu-item index="1-1">
          <template #title>
            <el-icon>
              <location/>
            </el-icon>
            <span slot="title">用户管理</span>
          </template>
        </el-menu-item>
      </router-link>
      <router-link to="/sys/roles">
        <el-menu-item index="1-2">
          <template #title>
            <el-icon>
              <location/>
            </el-icon>
            <span slot="title">角色管理</span>
          </template>
        </el-menu-item>
      </router-link>
      <router-link to="/sys/menus">
        <el-menu-item index="1-3">
          <template #title>
            <el-icon>
              <location/>
            </el-icon>
            <span slot="title">菜单管理</span>
          </template>
        </el-menu-item>
      </router-link>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon>
          <location/>
        </el-icon>
        <span>系统工具</span>
      </template>
      <el-menu-item index="2-1">
        <template #title>
          <el-icon>
            <location/>
          </el-icon>
          <span slot="title">数字词典</span>
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>

</template>

<script>
export default {
  name: "SideMenu"
}
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 100%;
}

a {
  text-decoration: none;
}
</style>