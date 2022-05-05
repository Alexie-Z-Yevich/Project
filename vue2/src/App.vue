<template>
  <router-view/>
</template>

<script>
import {ElButton} from "element-plus";

export default {
  name: "App",
  components: {ElButton},
};
</script>

<style>
html, body, #app {
  height: 100%;
  margin-top: 0px;
}
</style>

