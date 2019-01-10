<template>
  <div class="recommoned">
    <ul>
      <li v-for="(item,index) in playListImg" :key="index">
        <img :src="item.Img" slot="icon">
        <img class="song" :src="item.Img1" slot="icon">
        <span class="subject">{{item.Subject}}</span>
        <span class="explain">{{item.explain}}</span>
        <span class="add">{{item.add}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      playListImg: [
        {
          Img: "../../static/images/tab/e.jpg",
          Img1: "../../static/images/tab/sky.jpg",
          Subject: "专辑名",
          explain: "轻松",
          add: "17首"
        },
        {
          Img: "../../static/images/tab/sky.jpg",
          Img1: "../../static/images/tab/e.jpg",
          Subject: "专辑名",
          explain: "轻松",
          add: "17首"
        },
        {
          Img: "../../static/images/tab/sky.jpg",
          Img1: "../../static/images/tab/e.jpg",
          Subject: "专辑名",
          explain: "轻松",
          add: "17首"
        },
        {
          Img: "../../static/images/tab/e.jpg",
          Img1: "../../static/images/tab/sky.jpg",
          Subject: "专辑名",
          explain: "轻松",
          add: "17首"
        },
        {
          Img: "../../static/images/tab/e.jpg",
          Img1: "../../static/images/tab/sky.jpg",
          Subject: "专辑名",
          explain: "轻松",
          add: "17首"
        },
        {
          Img: "../../static/images/tab/sky.jpg",
          Img1: "../../static/images/tab/e.jpg",
          Subject: "专辑名",
          explain: "轻松",
          add: "17首"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.recommoned {
  ul {
    height: 40rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    li {
      width: 9.938rem;
      height: 10rem;
      position: relative;
      margin: 0.55rem 0.75rem 0.35rem 0.85rem;
      img {
        position: relative;
        width: 100%;
        height: 100%;
      }
      .subject {
        margin-top: 0.2rem;
        margin-left: 0.25rem;
        height: 0.875rem;
        font-size: 0.9rem;
        letter-spacing: 0.009rem;
        color: #000000;
        display: block;
      }
      .explain {
        position: absolute;
        margin-left: 0.25rem;
        margin-top: 0.613rem;
        height: 0.719rem;
        font-size: 0.75rem;
        letter-spacing: -0.025rem;
        color: #aeaeae;
      }
      .song {
        position: absolute;
        margin-left: 0.85rem;
        margin-top: -2.12rem;
        width: 0.906rem;
        height: 0.906rem;
      }
      .add {
        position: absolute;
        margin-left: 2.344rem;
        margin-top: -3.303rem;
        font-family: SourceHanSansCN-Regular;
        font-size: 0.87rem;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: -0.028rem;
        color: #fff;
      }
    }
  }
}
</style>
