<template>
  <div style="background-color:#e3e4e5">
    <div class="dxh-d">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <p class="user-left">
            <img class="user-portrait" :src="item.portd" alt="用户头像">
          </p>
          <p class="content">
            <span class="big-word">{{item.wenzi1}}</span>
            <span class="small-word">{{item.wenzi2}}</span>
          </p>
          <img
            class="user-por"
            v-if="item.wenzi1!=='宝宝最爱'"
            @click="deleteItem(index)"
            src="../../../static/images/tab/delete.png"
          >
        </li>
      </ul>
    </div>
    <!-- 编辑 -->
    <mt-popup
      position="bottom"
      v-model="collectAlbum"
      :closeOnClickModal="false"
      popup-transition="popup-fade"
    >
      <div class="imgss">
        <div class="div1">
          <p style="text-align:center;font-size:25px;padding-top:5px">请输入自定义专辑名称</p>
        </div>
        <div class="div2">
          <input
            type="text"
            v-model="favoriteName"
            style="width:200px;height:40px;margin-top:10px"
            placeholder="请输入自定义专辑"
          >
        </div>
        <div class="div3">
          <span @click="cancel()" style="width:50%;border-right:1px solid red">取消</span>
          <span @click="confirm" style="width:50%">确定</span>
        </div>
      </div>
    </mt-popup>

    <!-- 重命名 -->
    <mt-popup
      position="bottom"
      v-model="restarAlbum"
      :closeOnClickModal="false"
      popup-transition="popup-fade"
    >
      <div class="imgss">
        <div class="div1">
          <p style="text-align:center;font-size:25px;padding-top:5px" v-if="isRname">重命名</p>
        </div>
        <div class="div2">
          <input
            type="text"
            v-model="restarName"
            style="width:200px;height:40px;margin-top:10px"
            placeholder="请输入自定义专辑"
          >
        </div>
        <div class="div3">
          <span @click="cancelAdd()" style="width:50%;border-right:1px solid red">取消</span>
          <span @click="confirmAdd(isRname)" style="width:50%">确定</span>
        </div>
      </div>
    </mt-popup>

    <!-- 删除 -->
    <mt-popup
      v-model="popupVisible"
      position="bottom"
      :closeOnClickModal="false"
      popup-transition="popup-fade"
    >
      <div @touchmove.prevent>
        <div class="x-edit">
          <span class="res-name" @click="reset()">重命名</span>
          <span class="del" @click="delet()">删除</span>
        </div>
        <div class="x-x-cancel">
          <span class="x-cancel" @click="cancelEdit()">取消</span>
        </div>
      </div>
    </mt-popup>
    <div class="imgss">
      <img src="../../../static/images/tab/add.png" @click="talbum">
    </div>
    <router-link to='/'>
       <p style="text-align:center;font-size:20px">退出</p>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      popupVisible: false,
      collectAlbum: false,
      restarAlbum: false,
      favoriteName: "",
      currentIndex: 0,
      restarName: "",
      isRname: false,
      list: [
        {
          portd: "../../../static/images/tab/f.jpg",
          wenzi1: "宝宝最爱",
          wenzi2: "24首"
        },
        {
          portd: "../../../static/images/tab/e.jpg",
          wenzi1: "往后余生",
          wenzi2: "319首"
        },
        {
          portd: "../../../static/images/tab/e.jpg",
          wenzi1: "只想和你",
          wenzi2: "317首"
        }
      ]
    };
  },
  methods: {
    talbum() {
      this.collectAlbum = true;
    },
    // delet() {
    //   this.collectAlbum = false;
    //   let that = this;
    //   this.list.forEach(function(element, index) {
    //     if (index === that.currentIndex) {
    //       that.list.splice(index, 1),
    //       that.cancelEdit();
    //       that.$toast("删除成功");
    //     }
    //   });
    // },
    delet() {
      let that = this;
      that.list.splice(that.currentIndex, 1);
      that.cancelEdit();
      that.$toast("删除成功");
    },
    confirm() {
      if (this.favoriteName.length === 0) {
        this.$toast("添加不能为空");
      } else {
        let imgArr = ["../../../static/images/tab/勇士.jpg", 
        "../../../static/images/tab/湖人.jpg", 
        "../../../static/images/tab/热火.jpg"];
        let index = Math.floor(Math.random()*imgArr.length);
        let item = {
          portd: imgArr[index],
          wenzi1: "",
          wenzi2: "50首"
        };
        item.wenzi1 = this.favoriteName;
        this.list.push(item);
        this.favoriteName = "";
        this.$toast('添加成功')
        this.collectAlbum = false;
      }
    },
    deleteItem(index) {
      (this.popupVisible = true), (this.currentIndex = index);
    },
    cancelEdit() {
      this.popupVisible = false;
    },
    cancel() {
      this.collectAlbum = false;
    },
    reset() {
      this.restarAlbum = true;
      this.popupVisible = false;
      this.isRname = true;
      this.restarName=this.list[this.currentIndex].wenzi1
    },
    cancelAdd() {
      this.restarAlbum = false;
    },
    
    // confirmAdd(){
    //  let that=this;
    //  this.list.forEach(function(element,index){
    //   if(index===that.currentIndex){
    //      that.list[index].wenzi1=that.restarName
    //      that.cancelAdd();  //在别的事件里调用事件
    //      that.$toast('修改成功')
    //      that.restarName=''
    //    }
    //  })
    // }
    confirmAdd(isRname) {
      let that = this;
      if (isRname) {
        if (that.restarName.length === 0) {
          that.$toast("名字不能为空");
          return;
        } else {
          that.list[that.currentIndex].wenzi1 = that.restarName;
          that.cancelAdd();
          that.$toast("修改success");
          that.restarName = "";
        }
      }
    }
  }
};
</script>
<style scoped>
ul li {
  display: flex;
}
li {
  border-bottom: 1px solid pink;
}
.content {
  margin-left: 0.875rem;
}
.big-word {
  display: block;
  height: 0.906rem;
  margin-top: 0.4rem;
  font-family: SourceHanSansCN-Regular;
  font-size: 0.938rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0.072rem;
  color: green;
  padding: 5px 0 0 0;
}
.small-word {
  display: inline-block;
  padding-top: 0.581rem;
  height: 0.656rem;
  font-family: SourceHanSansCN-Regular;
  font-size: 0.688rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0.053rem;
  color: #898989;
}
.user-portrait {
  width: 3.125rem;
  height: 3.125rem;
  margin-top: 0.213rem;
  margin-left: 1.25rem;
}
.user-left {
  position: relative;
}
.user-por {
  margin-top: 1.225rem;
  position: absolute;
  margin-left: 20.25rem;
  width: 1.25rem;
  height: 1.25rem;
}
img {
  width: 4rem;
  height: 4rem;
}
.imgss {
  width: 100%;
  text-align: center;
}
.div1 {
  height: 40px;
  background-color: #cdcdcd;
}
.div2 {
  background-color: #ebebeb;

  height: 60px;
}
.div3 {
  background-color: #cbcbcb;
  height: 40px;
}
.div3 span {
  font-size: 25px;
  display: flex;
  justify-content: center;
  text-align: center;
}
.div3 {
  display: flex;
  justify-content: space-around;
}
.x-edit {
  display: grid;
  text-align: center;
  /* padding: 1rem 0; */
  margin: 5px auto;
}
.span {
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
.x-x-cancel {
  text-align: center;
}
.x-cancel {
  margin-top: 0.6rem;
  font-size: 1.4rem;
  color: #030303;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
}
</style>