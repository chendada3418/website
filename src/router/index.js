import Vue from "vue";
import VueRouter from "vue-router";

import Index from "../pages/index";
import Goods from "../pages/goods";
import Buycar from "../pages/buycar";
import Mine from "../pages/mine";


Vue.use(VueRouter);

// 路由规则
const routes = [
    {
        path: "/",
        component: Index
    },
    {
        // 默认显示
        path: "/goods/",
        component:{
            template:`<div>请先选择商品分类</div>`
        }
    },
    {
        path: "/goods/:type",
        component: Goods
    },
    {
        path: "/buycar",
        component: Buycar
    },
    {
        path: "/mine",
        component: Mine
    },
]

const router = new VueRouter({
    routes,
    mode:'history'  //清除#标记

})

export default router;