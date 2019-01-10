<template>
  <div class="pic">
    <mt-swipe :auto="4000" :speed="800">
      <mt-swipe-item class="ab" v-for="(item,index) in kobes" :key="index">
        <img :src="item.imgTT" class="kobe-img">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      kobes: [
        {
          id: 1,
          imgTT: "../../../static/images/tab/e.jpg"
        },
        {
          id: 2,
          imgTT: "../../../static/images/tab/sky.jpg"
        },
        {
          id: 3,
          imgTT: "../../../static/images/tab/h.jpg"
        }
      ]
    };
  }
};
</script>
<style scoped>
img {
  border-radius: 10px;
  height: 10.5rem;
}
.kobe-img {
  width: 100%;
}
.pic {
  margin: 0 0.75rem;
  height: 11.969rem;
}
</style>
