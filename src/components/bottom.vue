<template>
  <div class="dibu">
    <div class="littlebaby">
      <p class="red">
        <img src="../../static/images/tab/resizeApi.png" style="width:2.563rem;height:2.563rem">
      </p>
      <p class="bottom">
        <span class="big1">小宝贝快快睡</span>
        <span class="small1">PIGGDAY</span>
      </p>
      <img class="left" src="../../static/images/tab/pre.png">
      <img class="sky" src="../../static/images/tab/play.png">
      <img class="you" src="../../static/images/tab/next.png">
    </div>
    <div class="bottom1">
      <img class="voice" src="../../static/images/tab/voice.png" alt>
      <img class="energy" src="../../static/images/tab/energy.png" alt>
      <img class="voice" src="../../static/images/tab/jiaocha.png" alt>
      <img class="voice" src="../../static/images/tab/collect.png" alt>
      <img class="voice" src="../../static/images/tab/look.png" alt>
      <img class="voice" src="../../static/images/tab/sleeped.png" alt>
      <img class="voice" src="../../static/images/tab/music.png" @click="musicList">
    </div>
    <mt-popup
      v-model="bottomPopup"
      position="bottom"
      :closeOnClickModal="false"
      popup-transition="popup-fade"
    >
      <div>
        <span style="text-align:right;display:block" @click="onclick">退出</span>
        <p
          style="text-align:center;font-size:1.2rem;padding:1rem 0;border-bottom:1px solid #e3e4e5"
        >播放列表</p>
        <ul>
          <li v-for="(item,index) in bottomplay" :key="index">
            <img src="../../static/images/tab/unplay.png" alt>
            <p class="hidden">
              <span>{{item.name}}</span>
              <span class="span-word">{{item.singer}}</span>
            </p>
            <div style="padding-left:10px">
              <img
                src="../../static/images/tab/love.png"
                style="width: 1.281rem;	height: 1.188rem;"
                alt
              >
            </div>
          </li>
        </ul>
      </div>
    </mt-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bottomPopup: false,
      bottomplay: [
        {
          name: "Fearless",
          //    time:'05:20',
          singer: "taylor swift"
        },
        {
          name: "年少有为",
          //    time:'05:20',
          singer: "李荣浩"
        },
        {
          name: "The saltwater room",

          //    time:'05:20',
          singer: "owl city"
        },
        {
          name: "Sugar",
          //    time:'05:20',
          singer: "Marron 5"
        },
        {
          name: "shape of you",
          //    time:'05:20',
          singer: "ED"
        },
        {
          name: "年少有为",
          //    time:'05:20',
          singer: "李荣浩"
        },
        {
          name: "longlive",
          singer: "taylor swift"
        },
        {
          name: "sparkfly",
          singer: "taylor swift"
        }
      ]
    };
  },
   methods: {
    musicList() {
      this.bottomPopup = true;
    },
    onclick() {
      this.bottomPopup = false;
    },
   }
};
</script>
<style scoped>
ul {
  height: 60vh;
  overflow: hidden;
  overflow-y: scroll;
}
li {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #e3e4e5;
}
span {
  display: block;
  margin: 0.2rem 0.3rem;
}
.span-word {
  font-family: SourceHanSansCN-Regular;
  font-size: 0.688rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0.053rem;
  color: #898989;
}
.hidden {
  padding: 0.5rem 1rem;
  /* width:150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; */
}
.littlebaby {
  position: relative;
  height: 4.375rem;
  background-color: #ebebeb;
  box-shadow: 0rem -0.2rem 1rem rgba(99, 99, 99 0.8);
}
.bottom1 {
  display: flex;
  flex-wrap: flex nowrap;
  justify-content: space-around;
  height: 2.844rem;
  background-color: #ffffff;
  /* padding: 0 1rem; */
}
/* li {
  list-style-type: none;
} */
.voice {
  width: 1.156rem;
  height: 1.156rem;
  margin-top: 0.844rem;
}
.energy {
  width: 1.625rem;
  height: 0.875rem;
  margin-top: 1.031rem;
}
.red {
  position: absolute;
  margin-left: 1rem;
  margin-top: 0.813rem;
  width: 2.563rem;
  height: 2.563rem;
  background-blend-mode: normal, normal;
  border-radius: 0.094rem;
}
.sky {
  position: absolute;
  margin-left: 16.844rem;
  margin-top: -1.075rem;
  width: 2.875rem;
  height: 2.875rem;
  border-radius: 100%;
}

.left {
  position: absolute;
  width: 1.25rem;
  height: 0.875rem;
  margin-left: 14.7885rem;
}
.you {
  position: absolute;
  width: 1.25rem;
  height: 0.875rem;
  margin-left: 20.45rem;
}

.bottom {
  display: block;
  margin-left: 4.219rem;
  display: flex;
}
.big1 {
  display: block;
  margin-top: 1.049rem;
  font-family: SourceHanSansCN-Bold;
  font-size: 0.79rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.844rem;
  letter-spacing: -0.059rem;
  color: #000000;
}
.small1 {
  display: inline-block;
  position: absolute;
  margin-top: 2.125rem;
  font-family: SourceHanSansCN-Normal;
  font-size: 0.561rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.844rem;
  letter-spacing: -0.012rem;
  color: #636363;
}
.dibu{
 margin-top:1.5rem
}
</style>
