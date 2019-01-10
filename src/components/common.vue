<template>
  <div class="commoned">
    <div class="dxh-d">
      <ul>
        <li v-for="(item,index) in commend" :key="index">
          <div class="dxh-x">
            <p class="number" :class="index+1===1?'one':index+1===2?'two':index+1===3?'three':''" >{{index+1}}</p>
            <img @click="actionPopup" class="user-portrait" :src="item.portrait" alt="用户头像">
          <p class="word-space">
            <span class="big-word">{{item.big}}</span>
            <span class="small-word">{{item.small}}</span>
          </p>
          </div>
          <img @click="actionPopup" class="user-por" :src="item.por">
        </li>
      </ul>
    </div>
    <mt-popup
      v-model="popupVisible"
      position="bottom"
      :closeOnClickModal="false"
      popup-transition="popup-fade"
    >
      <div @touchmove.prevent>
        <div class="x-edit">
          <span class="res-name" @click="showAlterPop(2)">重命名</span>
          <span class="del" @click="delet()">删除</span>
        </div>
        <span class="x-cancel" @click="cancelEdit()">取消</span>
      </div>
    </mt-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      popupVisible: false,
      commend: [
        {
          portrait: "../../static/images/tab/e.jpg",
          big: "为孩子读诗",
          small: "107首",
          por: "../../static/images/tab/addin.png"
        },
        {
          portrait: "../../static/images/tab/i.jpg",
          big: "为孩子读诗",
          small: "107首",
          por: "../../static/images/tab/addin.png"
        },
        {
          portrait: "../../static/images/tab/f.jpg",
          big: "为孩子读诗",
          small: "107首",
          por: "../../static/images/tab/addin.png"
        },
        {
          portrait: "../../static/images/tab/h.jpg",
          big: "为孩子读诗",
          small: "107首",
          por: "../../static/images/tab/正确.png"
        },
        {
          portrait: "../../static/images/tab/sky.jpg",
          big: "为孩子读诗",
          small: "107首",
          por: "../../static/images/tab/addin.png"
        }
      ]
    };
  },
  methods: {
    actionPopup() {
      this.popupVisible = true;
    },
    cancelEdit() {
      this.popupVisible = false;
    },
    delet() {
      this.popupVisible = false;
    },
    showAlterPop() {
      this.popupVisible = false;
    },
    favoriteTo() {
      this.$router.push({
        path: "/favorite"
      });
    }
  }
};
</script>
<style scoped>
.number{
  padding:18px 10px
}
.one{
  color:palevioletred
}
.two{
  color: aqua
}
.three{
  color: brown
}
.x-edit {
  display: grid;
  text-align: center;
  margin: 5px auto;
}
span {
  display: block;
  text-align: center;
  border-radius: 25px;
}
.res-name {
  font-size: 1.2rem;
  color: #030303;
  height: 3rem;
  line-height: 3rem;
  background-color: #e3e4e5;

  border-bottom: 1px solid gray;
}
.del {
  background-color: #e3e4e5;
  font-size: 1.2rem;
  color: #030303;
  height: 3rem;
  line-height: 3rem;
}
.x-cancel {
  border-radius: 25px;
  margin-top: 0.6rem;
  background-color: #e3e4e5;
  font-size: 1.2rem;
  color: #030303;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
} 
.dxh-x{
  display: flex
}
ul li{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1rem;
}
.user-portrait {
  border-radius: 10px;
  width: 3.125rem;
  height: 3.125rem;
}
span{
  display: flex;
 
}
.word-space{
  margin-left:0.875rem
}
.user-por {
  width: 1.25rem;
  height: 1.25rem;
}

.big-word {
  font-family: SourceHanSansCN-Regular;
  font-size: 0.938rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0.072rem;
  color: #1c1b1b;
  
}
.small-word {
  font-family: SourceHanSansCN-Regular;
  font-size: 0.688rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0.053rem;
  color: #898989;
  padding-top:0.5rem;
  }
.return {
  width: 2.5rem;
  height: 2.5rem;
  background-color: #b2b2b2;
  border-radius: 0.313rem;
  opacity: 0.57;
}
</style>
