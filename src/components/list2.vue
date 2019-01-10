<template>
  <div class="commend">
    <div class="left">
      <p class="text1">精品推荐</p>
      <p class="text2">最热门的内容都在这里了</p>
    </div>
    <img class="right-img" src="../../static/images/home/right1.png">

    <div class="bottom" v-for="(item,index) in bottomA" :key="index">
      <div class="left1">
        <img class="img1" :src="item.img1">
        <img class="icon" src="../../static/images/banner/kk1.png">
        <p class="text3">{{item.text3}}</p>
        <p class="text4">{{item.text4}}</p>
      </div>
      <div class="right1">
        <img class="img2" :src="item.img2">
        <img class="icon" src="../../static/images/banner/kk1.png">
        <p class="text3">{{item.text3}}</p>
        <p class="text4">{{item.text4}}</p>
      </div>
      
    </div>
    <div class="swipe">
      <mt-swipe :auto="4000" :speed="1000">
        <mt-swipe-item v-for="(item,index) in bannerImg " :key="index">
          <img :src="item.banImg" class="swipe-img">
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bottomA: [
        {
          img1: "../../static/images/banner/精选专辑-专辑名1-icon.png",
          img2: "../../static/images/banner/精选专辑-专辑名2-icon.png",
          text3: "专辑名",
          text4: "轻松"
        },
        {
          img1: "../../static/images/banner/精选专辑-专辑名3-icon.png",
          img2: "../../static/images/banner/精选专辑-专辑名4-icon.png",
          text3: "专辑名",
          text4: "轻松"
        },
        {
          img1: "../../static/images/banner/精选专辑-专辑名5-icon.png",
          img2: "../../static/images/banner/精选专辑-专辑名6-icon.png",
          text3: "专辑名",
          text4: "轻松"
        }
      ],
      bannerImg: [
        {
          banImg: "../../../static/images/banner/kk1.png"
        },
        {
          banImg: "../../../static/images/banner/kk2.jpg"
        },
        {
          banImg: "../../../static/images/banner/kk3.jpg"
        }
      ]
    };
  }
};
</script>
<style scoped>
.commend {
  height: 44.219rem;
  position: relative;
  padding-bottom: 2.5rem;
}
.left {
  margin-left: 0.844rem;
}
.text1 {
  height: 1.063rem;
  font-size: 1.138rem;
  letter-spacing: 0.028rem;
  color: #030303;
}
.text2 {
  height: 0.781rem;
  font-size: 0.813rem;
  letter-spacing: -0.028rem;
  color: #555555;
  padding-top: 10px;
}
.right-img {
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  right: 0.75rem;
  top: 0.469rem;
}
.bottom {
  width: 21.875rem;
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  margin-left: 1.125rem;
}
.img1 {
  width: 9.938rem;
  height: 10rem;
}
.img2 {
  width: 9.938rem;
  height: 10rem;
  margin-right: 0.5rem;
}
.text3 {
  height: 0.875rem;
  font-size: 0.9rem;
  letter-spacing: 0.009rem;
  color: #000000;
}
.text4 {
  height: 0.719rem;
  font-size: 0.75rem;
  letter-spacing: -0.025rem;
  color: #aeaeae;
  padding-top: 0.406rem;
}
.icon{
  margin-left:-8rem;
  margin-bottom:0.9rem;
    width: 0.906rem;
	height: 0.906rem;
	box-shadow: 0rem 0.031rem 0.063rem 0rem 
		rgba(0, 0, 0, 0.35);
}
.swipe{
  height:14rem;
  padding-top: 2rem;
}
.swipe-img{
  width: 92%;
  height:11rem;
  border-radius:10px;
  margin: 1.156rem 0.75rem 1.5rem 0.9rem;
}
</style>

