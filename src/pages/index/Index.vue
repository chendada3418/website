<template>
  <div>
    <div class="content">
      <router-link to="/goods/服装">服装</router-link>
      <router-link to="/goods/水果">水果</router-link>
      <router-link to="/goods/居家">居家</router-link>
      <router-link to="/goods/美女">美女</router-link>
      <router-link to="/goods/首饰">首饰</router-link>
      <router-link to="/goods/美妆">美妆</router-link>
    </div>
  </div>
</template>

<script>
import '../../assets/css/index.css'
export default {
  data() {
    return {
    }
  },
};
</script>

<style lang="scss">
.mydiv {
  width: 2rem;
  height: 2rem;
  border: 1px solid red;
}
</style>