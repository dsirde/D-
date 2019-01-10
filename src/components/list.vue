<template>
    <div class="liststyle">
        <div class="listPic">
            <div class="left">
                <img src="../../static/images/tab/e.jpg" alt="">
                <p class='big-word'>专辑号</p>
                <p class="small-word">轻松</p>
            </div>
            <div class="right">
                <img src="../../static/images/tab/e.jpg" alt="">
                <p class='big-word'>专辑号</p>
                <p class="small-word">轻松</p>
            </div>
             <div class="left">
                <img src="../../static/images/tab/e.jpg" alt="">
                <p class='big-word'>专辑号</p>
                <p class="small-word">轻松</p>
            </div>
            <div class="right">
                <img src="../../static/images/tab/e.jpg" alt="">
                <p class='big-word'>专辑号</p>
                <p class="small-word">轻松</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
     
}
</script>
<style scoped>
  .liststyle{
      height:40rem;
  }
  .listPic{
    flex-flow:row wrap;
      display: flex;
      justify-content: space-between;
      margin-top:1.356rem;
  }
  .left{
      margin-left:1.125rem
  }
  .right{
      padding-right:1.125rem
  }
  img{
      width: 9.938rem;
	height: 10rem;
  }
  .big-word{
      height: 0.875rem;
	font-family: SourceHanSansCN-Regular;
	font-size: 0.9rem;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0.009rem;
	color: #000000;
  }
  .small-word{
    padding-top:0.406rem;
	height: 0.719rem;
	font-family: SourceHanSansCN-Regular;
	font-size: 0.75rem;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: -0.025rem;
	color: #aeaeae;
  }
</style>
