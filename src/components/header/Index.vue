<template>
  <div class="header">
    <ul class="top">
      <li @click="back">
        <a href="#">
          <font class="fa fa-chevron-left"></font>返回
        </a>
      </li>
      <li>乐乐购</li>
      <li @click="fn">
        <!-- <a href="#"><font class="fa fa-reorder"></font>菜单 </a> -->
        菜单
      </li>
      <transition
        enter-class
        enter-active-class="animated fadeInRight"
        enter-to-class
        leave-class
        leave-active-class="animated fadeOutRight"
        leave-to-class
      >
        <div class="menu" v-if="a">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      </transition>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      a: false
    };
  },
  methods: {
    fn() {
      this.a = !this.a;
    },
    fn1(){
      alert(123)
    },
    back(){
      this.$router.go(-1);
      // alert('返回')
    }
  }
};
</script>

<style lang="scss">
.header {
  height: 1rem;
  background: orange;
}

.top {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  color: white;
}
.menu {
  display: block;
  width: 4rem;
  height: 11.34rem;
  background: rgb(53, 50, 51);
  position: fixed;
  left: 47%;
  top: 1rem;
}
.menu ul {
  margin: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.menu ul li {
  width: 100%;
  height: 1rem;
  margin-bottom: 10px;
  border: 1px solid gray;
}
</style>