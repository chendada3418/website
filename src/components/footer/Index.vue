<template>
  <div class="footer">
    <ul>
      <li>
        <router-link to="/">
          <font class="fa fa-home"></font>首页
        </router-link>
      </li>
      <li>
        <router-link to="/goods">
          <font class="fa fa-heart"></font>商品
        </router-link>
      </li>
      <li>
        <router-link to="/buycar">
          <font class="fa fa-shopping-cart"></font>购物车
        </router-link>
      </li>
      <li>
        <router-link to="/mine">
          <font class="fa fa-user"></font>我的
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.footer {
  height: 1rem;
  background: gray;
}
ul {
  display: flex;
  justify-content: space-around;
  margin-left: -5px;
}
ul li {
  height: 1rem;
  line-height: 1rem;
}
ul li a {
  color: white;
}
ul li a font {
  margin: 5px;
}
.router-link-exact-active{
  color: aquamarine;
}
</style>