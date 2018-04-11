<template>
  <section class="coainter">
    <img v-for="(v,i) in dataList" :key="i" :src="'http://image1.jfoto.cn/'+v.hash+'?x-oss-process=image/resize,m_lfit,w_250,limit_1'" class="images" @click="largerImage(v.hash)"/>
  </section>
</template>

<script>
  export default {
    data(){
      return {
        dataList:[],
        index:'',
        imgData:[],
        public:{
          path:'https://wx.jfoto.cn/api/image/list',
          dateTime:1523068338000,
          HTTP:'http://image1.jfoto.cn/'
        }
      }
    },
    methods:{
      details(){
        let t = this;
        wx.request({
          url: t.public.path,
          data:{
            galleryid: this.$root.$mp.query.gallery,
            sorttype: 'shoottime',
            order: 'desc',
            lasttime: t.public.dateTime
          },
          success:function(res){
            if(res && res.data && res.data.data){
              t.dataList = t.dataList.concat(res.data.data);
              t.index = t.dataList.length-1;
              t.public.dateTime = t.dataList[t.index].shoottime;
              const IMG = [];
              for(let i=0;i<t.dataList.length;i++){
                IMG.push(t.public.HTTP+t.dataList[i].hash)
                //console.log(new Date(parseInt(t.dataList[i].shoottime)),i);
              }
              t.imgData = IMG;
              wx.hideLoading();
              wx.stopPullDownRefresh()
              wx.hideNavigationBarLoading()
//              setTimeout(function(){
//                wx.hideLoading();
//                wx.stopPullDownRefresh();
//              },2000)
            }
          }
        })
      },
      largerImage(url){
        let t = this;
        wx.previewImage({
          current: t.public.HTTP+url,
          urls: t.imgData
        })
      }
    },
    mounted(){
      this.details();
    },
    onReachBottom(){
      let t = this;
      wx.showLoading({
        title: '加载中···',
        mask: true,
        success:function(){
          t.details();
        }
      });


    },
    onPullDownRefresh(){
      let t = this;
      wx.showNavigationBarLoading()
      wx.showLoading({
        title: '刷新',
        mask: true,
        success:function(){
          t.public.dateTime = '1523068338000';
          t.dataList = [];
          t.details();
        }
      });

    }
  }
</script>

<style>
  .coainter{
    text-align: center;
    margin:0 auto;
  }
  .coainter .images{
    width:40%;
    height:200rpx;
    margin:20rpx;
  }
</style>
