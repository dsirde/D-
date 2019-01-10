<template>
  <div>
    <search search-type="2" v-on:callbanckSearch="findCode"></search>
    <history :history-list="historyList" v-on:callbackdelAll="delAll"></history>
    <!-- <ul>
      <li>
        <div class="favorite-list">
          <img src="../../../static/images/tab/love.png" alt>
          <p>
            <span>往后余生</span>
            <span>一路有你</span>
          </p>
        </div>
        <img src="../../../static/images/tab/1.png" alt class="edit">
      </li>
    </ul>-->
  </div>
</template>
<script>
import search from "../../components/search";
import history from "./components/history";
export default {
  data() {
    return {
      historyList: []
    };
  },
  components: {
    search,
    history
  }, 
  created() {
    let historyList = JSON.parse(localStorage.getItem("historyList"));
    this.historyList = historyList ? historyList : [];
    console.log(this.$route.query.username);
  },
  methods: {
    findCode(e) {
      this.historyList.unshift(e); //往数组的头部添加一个元素
      this.historyList = Array.from(new Set(this.historyList)); //去重 超过的去掉
      // console.log(typeof "this.historyList")
      localStorage.setItem("historyList", JSON.stringify(this.historyList));
      // console.log(JSON.parse(localStorage.getItem('historyList')))
      if (this.historyList.length > 5) {
        this.historyList.pop();
      }
    },
    delAll() {
      console.log("kk")
      this.historyList = [];
      localStorage.removeItem("historyList");
    }
  },
  // watch:{
  //      historyList:{
  //          handler:function(historyList){
  //           //  history.save(historyList)
  //              return JSON.parse(window.localStorage.getItem('historyList'));
  //          }
  //      },
  //      deep:true //深复制
  // },
 
};
</script>
<style lang='scss' scoped>
// li {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0.8rem 1rem;
//   border-bottom: 1px solid #eee;
//  .favorite-list{
//      display: flex;
//   img {
//     width: 3.2rem;
//     height: 3.2rem;
//   }
//   span  {
//     display: flex;
//     margin: 0 0 0.35rem 1rem;
//   }
//  }
//   .edit{
//         width:1.5rem;
//         height: 1.5rem;
//     }
// }
</style>
