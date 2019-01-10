<template>
  <div class="search">
    <mt-button type="danger" size="large" @click="cutChange">中英切换</mt-button>
    <search-x search-type="1"></search-x>
    <curry-x :barInfo="barInfo" barInfoType="1"></curry-x>
    <picture-x></picture-x>
    <world-x></world-x>
    <list1-x></list1-x>
    <curry-x :barInfo="barInfo" barInfoType="2"></curry-x>
    <picture-x></picture-x>
    <world-x></world-x> 
    <common-x></common-x>
    <babylove-x></babylove-x>
    <bottom-x></bottom-x>
    <actionSheet-x></actionSheet-x>
  </div>
</template>
<script>
import search from "../../components/search";
import curry from "../../components/curry";
import picture from "../../components/picture";
import world from "../../components/world";
import common from "../../components/common";
import list1 from "../../components/list1";
import babylove from "../../components/babylove";
import bottom from '../../components/bottom'
import actionSheet from "../../components/actionSheet";
export default {
  components: {
    searchX: search,
    curryX: curry,
    pictureX: picture,
    worldX: world,
    commonX: common,
    list1X: list1,
    babyloveX: babylove,
    bottomX:bottom,
    actionSheetX:actionSheet
  },
  data() {
    return {
      barInfo: [
        {
          imgUrl: "../../../static/images/tab/1.png",
          word: this.$t("home.sort.sortTitle")
        },
        {
          imgUrl: "../../../static/images/tab/2.png",
          word: this.$t("home.sort.sortTitle2")
        },
        {
          imgUrl: "../../../static/images/tab/3.png",
          word: this.$t("home.sort.sortTitle3")
        },
        {
          imgUrl: "../../../static/images/tab/4.png",
          word: this.$t("home.sort.sortTitle4")
        },
        {
          imgUrl: "../../../static/images/tab/5.png",
          word: this.$t("home.sort.sortTitle5")
        }
      ]
    };
  },
  methods: {
    cutChange() {
      this.$i18n.locale = this.$i18n.locale === "zh" ? "en" : "zh";
      localStorage.setItem("lang", this.$i18n.locale);
      location.reload(); //重新刷新页面
    }
  }
};
</script>
<style scoped>
</style>
