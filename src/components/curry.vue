<template>
  <div class="btn">
    <div v-for="(item,index) in barInfo" :key="index">
      <img v-if="barInfoType==='1'" :src="item.imgUrl" class="imgProject">
      <p class="p-first" :class="barInfoType==='2'?'p-text':''">{{item.word}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    //子组件接收参数
    barInfo: {
      type: Array,
      dafault: [],
      required: true
    },
    barInfoType: {
      type: String,
      dafault: "1",
      required: true
    }
  },

  data() {
    return {};
  }
};
</script>
<style scoped>
.btn {
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 1.256rem 1.081rem 1.156rem 1.081rem;
  /* height: 4rem; */
}
.imgProject {
  width: 2.563rem;
  height: 2.563rem;
  border-radius: 50%;
}
.p-text {
  margin: 0 auto;
  font-family: SourceHanSansCN-Regular;
  background-color: #fff;
  font-size: 0.79rem;
  border-radius: 0.188rem;
  border: solid 0.05rem #e5e3e3;
  line-height: 1.5rem;
}
.p-first {
  font-family: SourceHanSansCN-Regular;
  font-size: 0.79rem;
}
</style>
