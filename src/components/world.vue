<template>
  <div class="model">
    <li>
      <div class="world">
        <p>
          <span class="taylor">精品推荐</span>
          <span class="swift">最热门的内容都在这里了</span>
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
        path: "/favorite1"
      });
    }
  }
};
</script>
<style  scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1rem;
}
span {
  display: flex;
}
.world {
  display: flex;
}
.taylor {
  font-family: SourceHanSansCN-Regular;
  font-size: 1.138rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0.028rem;
  color: #030303;
}
.swift {
  font-family: SourceHanSansCN-Regular;
  font-size: 0.813rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: -0.028rem;
  color: #555555;
}
.more-png {
  width: 1.25rem;
  height: 1.25rem;
}
</style>
