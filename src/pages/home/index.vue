<template>
<div class="home">
  <mt-header title="故事云" fixed>
    <mt-button slot="left" icon='back'>返回</mt-button>
   <div slot="right"> 
        <mt-button icon="more"></mt-button>
   </div>
 </mt-header> 
    <div class="search">
      <img src='../../../static/images/tab/search-icon.png' class="se"> 
      <span class="keyword">搜索关键字</span>
      <img src='../../../static/images/tab/right.png' class="sr">
    </div>
  <div class="navBar">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">
            <img slot="icon" src="../../../static/images/tab/h.jpg" >
            欢乐儿歌
          </mt-tab-item>
          <mt-tab-item id="2">
            <img slot="icon"  src="../../../static/images/tab/i.jpg" > 
            童话故事
          </mt-tab-item>
          <mt-tab-item id="3">
            <img slot="icon"  src="../../../static/images/tab/sky.jpg" >
            启蒙英语
          </mt-tab-item>
          <mt-tab-item id="4">
            <img slot="icon"  src="../../../static/images/tab/e.jpg" >
            国学课堂
          </mt-tab-item>
          <mt-tab-item id="5">
            <img slot="icon"  src="../../../static/images/tab/f.jpg" >
            安心哄睡
          </mt-tab-item>
        </mt-navbar>
  </div>
    <div class='tupian'>
      <mt-swipe :auto="4000" :speed='800'>
      <mt-swipe-item  v-for="(item,index) in kobes" :key="index">
        <img :src="item.imgUrl"  class="kobe-img">
      </mt-swipe-item>
    </mt-swipe>
    </div>
</div> 
</template>
<script>
export default {
  components:{},
    data(){
        return{
           selected:'',
         kobes:[
           {"id":1,
            "imgUrl":'../../../static/images/tab/h.jpg'
           },
            {"id":2,
            "imgUrl":'../../../static/images/tab/sky.jpg'
           },
            {"id":3,
            "imgUrl":'../../../static/images/tab/e.jpg'
           }
          ]
        }
    }
}
</script>
<style lang='scss' scoped>
.search{
   display: flex;
  position: relative;
  align-items: center;
  height: 2.219rem;
  background-color: #ffffff;
  box-shadow: 0rem 0.156rem 0.147rem 0.009rem rgba(99, 99, 99, 0.08);
  border-radius: 0.313rem;
  border: solid 0.051rem #e5e5e5;
  margin: 3.563rem 0.75rem 0 0.75rem;
 .se {
  width: 0.75rem;
  height: 0.719rem;
  margin-left: 0.625rem;}
  .sr{  
    position: absolute;
  right: 1.063rem;
  top:0.813rem;
  width: 0.75rem;
  height: 0.75rem}
 .keyword{
   font-family: SourceHanSansCN-Regular;
  font-size: 0.79rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0.003rem;
  color: #737373;
  margin-left: 0.5rem;}
}
.navBar{
 
  height: 4rem;
  padding: 0.156rem 1.188rem 1.156rem 1.281rem;
}
 .mint-header{
         background-color: #000;
         height: 50px;
     }
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: none;
  color: #030303;
}
.kobe-img {
  width: 100%;
  height: 100%;
}
.tupian{
    height:240px ;
   
}
</style>
