<template>
<!--  <el-button>I am ElButton</el-button>-->
  <div>
<!--    <router-link to="/home">home</router-link>-->
<!--    <router-link to="/Login">Login</router-link>-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import {ElButton} from "element-plus";

export default {
  name: "App",
  components: {ElButton},
};
</script>

<style>
html,body,#app{
  height: 100%;
  margin-top: 0px;
}
</style>

