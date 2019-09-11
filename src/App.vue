<template>
  <div class="container">
    <Header></Header>
    <router-view class="main">
    </router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/header/Index.vue";
import Footer from "./components/footer/Index.vue";

export default {
  name: "app",
  data() {
    return {

    };
  },
  components: {
    Header,
    Footer,
  }
};
</script>

<style lang="scss">
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main{
  flex: 1;

}

</style>
