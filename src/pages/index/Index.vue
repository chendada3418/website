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
    <!-- 轮播广告 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import "../../assets/css/index.css";
export default {
  data() {
    return {};
  },
  mounted() {
    //轮播图
    var mySwiper = new Swiper(".swiper-container", {
      // direction: "vertical",   //默认水平
      loop: true,
      autoplay:{
        delay:2000,
        //防止触碰停止自动轮播
        disableOnInteraction:false
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
};
</script>

<style lang="scss">
.mydiv {
  width: 2rem;
  height: 2rem;
  border: 1px solid red;
}
</style>