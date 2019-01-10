<template>
    <div class="favorite">
        <ul>
            <li v-for="(item,index) in Favorite" :key="index">
                <div class="favorite-list">
                    <img :src="item.srcImg" alt="">
                    <p>
                        <span>{{item.title}}</span>
                        <span>{{item.word}}</span>
                    </p>
                </div>
                <img v-if="item.title!=='宝宝最爱'" @click="showEditPop(index)" :src="item.desc" alt="" class="edit">
            </li>
        </ul>
        <div class="addImg" v-show="Favorite.length<5">
            <img src="../../../static/images/play_list/add1.png" alt="" @click="showAddPop()">
        </div>
        <mt-popup v-model="popupVisible1" position="bottom" class="built-album-edit" :closeOnClickModal=false>
            <div class="x-edit">
                <span class="res-name" @click="rename()">重命名</span>
                <span class="del" @click="del()">删除</span>
            </div>
            <span class="x-cancel" @click="cancelEdit()">取消</span>
        </mt-popup>
        <mt-popup v-model="popupVisible2" position="bottom" class="built-album-favorite" :closeOnClickModal=false>
            <div>
                <p class="title" v-if="isRname">重命名</p>
                <p class="title" v-else>请输入自定义专辑名称</p>
                <div class="middle">
                    <input v-model="titleName" type="text" placeholder="请输入自定义专辑">
                </div>
                <div class="bottom">
                    <span class="cancel" @click="cancelEdit()">取消</span>
                    <span @click="confirmEdit(isRname)">确定</span>
                </div>
            </div>
        </mt-popup>
    </div>
</template>

<script>
export default {
    data(){
        return{
            popupVisible1:false,
            popupVisible2:false,
            titleName:"",
            currentIndex:0,
            isRname:false,
            Favorite:[
                {
                    "srcImg":"../../static/images/play_list/0.png",
                    "title":"宝宝最爱",
                    "word":"0首",
                    "desc":""
                },
                {
                    "srcImg":"../../static/images/play_list/1.png",
                    "title":"tell me why",
                    "word":"1首",
                    "desc":"../../static/images/play_list/edit.png"
                },
                {
                    "srcImg":"../../static/images/play_list/5.png",
                    "title":"往后余生",
                    "word":"1首",
                    "desc":"../../static/images/play_list/edit.png"
                },
            ]
        }
    },
    methods:{
        showEditPop(index){
            this.popupVisible1=true;
            this.currentIndex=index;
        },
        rename(){
            this.popupVisible2=true;
            this.popupVisible1=false;
            this.isRname=true;
            this.titleName=this.Favorite[this.currentIndex].title
        },
        del(){
            let that=this;
            this.Favorite.forEach(function(element,index){
                if(index===that.currentIndex){
                    that.Favorite.splice(index,1);
                    that.cancelEdit();
                    that.$toast("删除成功");
                }
            })
        },
        cancelEdit(){
            this.popupVisible1=false;
            this.popupVisible2=false;
            this.isRname=false;
            this.titleName="";
        },
        showAddPop(){
            this.popupVisible2=true;
        },
        confirmEdit(isRname){
            if(isRname){
                this.Favorite[this.currentIndex].title=this.titleName;
                this.$toast("重命名成功");
                this.isRname=false;
            }
            else
            {
                if(this.titleName.length===0){
                this.$toast('收藏夹名字不能为空');
                return;
                }
            let imgArr=['static/images/play_list/0.png',
                'static/images/play_list/1.png',
                'static/images/play_list/2.png',
                'static/images/play_list/3.png',
                'static/images/play_list/4.png',
                'static/images/play_list/5.png'];
                let index=Math.floor(Math.random()*imgArr.length);
                let item = {
                    srcImg:imgArr[index],
                    word: "0首",
                    desc:'../../static/images/play_list/edit.png',
                    // title:this.titleName,
                };
                item.title=this.titleName;
                this.Favorite.push(item);
                this.$toast('添加成功');
            }
            this.titleName="";
            this.popupVisible2=false;
        }       
    }
}
</script>