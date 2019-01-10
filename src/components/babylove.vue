<template>
  <div class="babylove">
    <li>
      <div class="dxh">
        <p>
          <span class="text1">宝宝最爱</span>
          <span class="text2">妈妈收藏</span>
        </p>
      </div>
      <img class="more-png" src="../../static/images/tab/more.png" @click="favoriteTo">
    </li>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    favoriteTo() {
      this.$router.push({
        path: "/favorite2"
      });
    }
  }
};
</script>
<style scoped>

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1rem;
}
.dxh {
  display: flex;
}
.more-png {
  width: 1.2rem;
  height: 1.2rem;
}
span {
  display: flex;
}
.text1 {
  font-family: SourceHanSansCN-Regular;
  font-size: 1.138rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0.028rem;
  color: #030303;
}
.text2 {
  font-family: SourceHanSansCN-Regular;
  font-size: 0.813rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: -0.028rem;
  color: #555555;
}
</style>
