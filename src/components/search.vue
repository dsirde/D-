<template>
  <div :class="searchType==='2'?'searchType-wp':''">
    <div class="search" @click="toSearch" :class="searchType==='2'?'searchType-w':''">
      <img
        src="../../static/images/tab/search-icon.png"
        @click="searchKeyWord('icon')"
        class="icon"
      >
      <!-- <span class="keyword"> 搜索关键字</span> -->
      <input
        type="text"
        @keydown="searchKeyWord($event)"
        class="keyword"
        v-model="keyWorld"
        :placeholder="$t('home.search.placeholder')"
      >
      <img
        class="right-delete"
        v-if="this.keyWorld.length>0?searchType==='2':''"
        @click="clean"
        src="../../static/images/tab/deleted.png"
      >
      <img class="right" v-if="searchType==='1'" src="../../static/images/tab/collect.png">
    </div>
    <router-link to="/">
      <span class="quxiao" v-if="searchType==='2'">{{this.$t('home.search.cancel')}}</span>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ["searchType"],
  data() {
    return {
      keyWorld: ""
    };
  },
  methods: {
    toSearch() {
      this.$router.push({
        path: "/Search",
        query: { username: "D先生" }
      });
    },
    clean() {
      this.keyWorld = "";
    },
    searchKeyWord(e) {
      if (e.keyCode === 13 || e === "icon") {
        let keyWorld = this.keyWorld.replace(/\s+/g, ""); //去除所有空格
        if (keyWorld.length !== 0) {
          //使用$emit  触发组件的自定义事件
          this.$emit("callbanckSearch", this.keyWorld);
        } else {
          this.$toast("关键字不能为空");
        }
      }
    }
  }
};
</script>
<style scoped>
.search {
  display: flex;
  position: relative;
  align-items: center;
  height: 2.219rem;
  background-color: #ffffff;
  box-shadow: 0rem 0.156rem 0.147rem 0.009rem rgba(99, 99, 99, 0.08);
  border-radius: 0.313rem;
  border: solid 0.051rem #e5e5e5;
  margin: 0.563rem 0.75rem 0 0.75rem;
}
/* .searchType-w{
  width:85%
} */
.icon {
  width: 0.75rem;
  height: 0.719rem;
  margin-left: 0.625rem;
}
.right {
  position: absolute;
  right: 1.063rem;
  top: 0.813rem;
  width: 0.75rem;
  height: 0.75rem;
}
.right-delete {
  position: absolute;
  right: 3rem;
  top: 0.75rem;
  width: 0.75rem;
  height: 0.75rem;
}
.keyword {
  font-family: SourceHanSansCN-Regular;
  font-size: 0.79rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0.003rem;
  color: #737373;
  margin-left: 0.5rem;
  width: 80%;
  border: none;
}
.quxiao {
  position: absolute;
  font-size: 16px;
  top: 18px;
  right: 20px;
  height: 22px;
}
</style>
