<template>
    <div>
        <div class="photo">
            <p>
                <span>{{item.title}}</span>
                <img :src="host+'/uploads/'+item.img">
                <span>{{item.price}}元</span>
            </p>
        </div>
    </div>
</template>

<script>
import {host} from "../../const/index.js"
export default {
    data() {
        return {
            host:host,
        }
    },
    props:["item"],
    
    
}
</script>

<style lang="scss">
.photo p{
    border:1px solid gray;
    margin-left: 5px;
    overflow-y: scroll;
}
.photo p span{
    display: block;
    // border: 1px solid gray;
}
.photo p img{
    width: 2rem;
    height: 1.5rem;
}
</style>