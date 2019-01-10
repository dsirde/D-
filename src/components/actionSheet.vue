<template>
  <div class="actionSheet">
    <mt-button type="default" size="large" @click="actionSheet">
      <label class="mint-button-text">点击上拉 action sheet</label>
    </mt-button>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
  </div>
</template>
<script>
export default {
  data() {
    return {
      actions: [
        {
          name: "拍照",
          method: this.getCamera
        },
        {
          name: "从相册中选择",
          method: this.getLibrary
        }
      ],
      sheetVisible: false
    };
  },
  methods: {
    actionSheet() {
      this.sheetVisible = true;
    },
    getCamera() {
      console.log("初次见面");
    },
    getLibrary() {
      console.log("请多多关照");
    }
  }
};
</script>
<style scoped>

</style>
