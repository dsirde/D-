<template>
  <div class="history">
    <div class="history-list">历史记录</div>
    <ul>
      <li v-for="(item,index) in historyList" :key="index">
        <span class="span-word">{{item}}</span>
        <img @click="delHistory(index)" src="../../../../static/images/tab/deleted.png" alt>
      </li>
    </ul>
    <div class="button" v-if="this.historyList.length>0">
      <img
        class="button-icon"
        @click="delAll"
        src="../../../../static/images/tab/history-clear.png"
        alt
      >
    </div>
  </div>
</template>
<script>
export default {
  props: ["historyList"],
  data() {
    return {};
  },
  methods: {
    delHistory(index) {
      this.historyList.splice(index, 1);//删除 index数组的位置 1 是个数
      localStorage.setItem("historyList", JSON.stringify(this.historyList));
    },
    delAll() {
      console.log('k')
      this.$emit("callbackdelAll");
      // this.historyList = [];
    }
  }
};
</script>
<style lang="scss" scoped>
.history {
  margin: 0 0.75rem;
}
.history-list {
  padding: 10px 0;
}
.button {
  width: 10rem;
  margin: 2rem auto;
}
.button-icon {
  width: 100%;
}
li {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  margin: 0 auto;
  border: 1px solid #eee;
  box-shadow: 0 0.1rem 0.3rem #ccc;
  span {
    padding: 0 0.3rem;
  }
  img {
    width: 0.75rem;
    height: 0.75rem;
    padding: 0 0.3rem;
  }
  .span-word {
    width: 60%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
