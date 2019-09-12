<template>
  <div class="box">
      <span class="sp">商品: {{type}}</span>
        <div class="goods">
            <ul>
                <li is="Item" v-for="item in arr" :key="item._id" :item="item"></li>
            </ul>
        </div>
         <div class="goods">
            <ul>
                <li is="Item" v-for="item in arr" :key="item._id" :item="item"></li>
            </ul>
        </div>
        <div class="goods">
            <ul>
                <li is="Item" v-for="item in arr" :key="item._id" :item="item"></li>
            </ul>
        </div>
        <div class="goods">
            哈哈哈哈哈哈哈哈
        </div>
  </div>
</template>

<script>
import Item from "./Item.vue"
import "../../const/index.js"
import {host} from '../../const/index.js';
export default {
  data() {
    return {
      type: "没有分类",
      arr:[]
    };
  },
  components:{
      Item,
  },
  mounted() {
    this.type = this.$route.params.type;
    let url = host+"/goods?_type=_type&_word="+this.type+"&_limit=6&_pege=1";

    this.$axios.get(url).then(res =>{
       this.arr = res.data.result;
       console.log(res.data); 
    })
  }
};
</script>

<style lang="scss">
.box{
    overflow:scroll;
}
.sp::after{
    content: "";
    // border-bottom: 1px solid red;
    display: block;
    margin-bottom: 10px;
}
.goods ul{
    flex-direction: column;
}
.goods ul li{
    display: block;
    border: 1px solid gray;
    margin-left: 10px;

}
</style>