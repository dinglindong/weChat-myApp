<template>
  <section class="container">
    <view class="section">
      <!--<section class="mask">-->
        <!--<image src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"></image>-->
      <!--</section>-->
      <video :src="videoLink" objectFit="cover"></video>
      <section class="text">
        <p class="description">亲爱的McAdoo，录制短视频，为xxx打Call~!你还可以参与唯医抽奖活动哦！</p>
        <button class="supportBtn" @click="bindButtonTap">录制视频支持他</button>
        <text @click="jumpSupper">更换支持者</text>
        <button class="service" open-type="contact" session-from="weapp">CAOS2018客服</button>
      </section>
    </view>
    <!--<div>{{message}}</div>-->
  </section>
</template>

<script>
  export default {
    data(){
      return {
        message:'你好，这个是一个start页面',
        videoLink:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
      }
    },
    methods:{
      bindButtonTap: function() {
//        let t = this;
//        wx.chooseVideo({
//          sourceType: ['album', 'camera'],
//          maxDuration: 10,
//          compressed:false,
//          camera: ['front', 'back'],
//          success: function (res) {
//            t.videoLink = res.tempFilePath
//          }
//        })
        wx.navigateTo({
          url: '../rcord/rcord',
        })
      },
      jumpSupper(){
        wx.navigateTo({
          url: '../courseChairman/courseChairman',
        })
      },
      jumpService(){
        wx.navigateTo({
          url: '../service/service',
        })
      }
    },
    onShareAppMessage() {
      return {
        title: '我和【主席名】一起录制了短视频为 【分会名】打call，快来看看吧！',
        path: '/pages/start/start'
      }
    },
  }
</script>

<style>
  .section{
    width:100%;
    height:360rpx;
  }
  .section video{
    width:100%;
    height:360rpx;
  }
  .text{
    text-align: center;
    margin:40rpx 60rpx;
    font-size:32rpx;
    color:#666;
  }
  .description{
    text-align:left;
  }
  .supportBtn{
    width:400rpx;
    margin:40rpx auto;
  }
  .service{
    position: absolute;
    left:0rpx;
    bottom:0rpx;
    margin-bottom: 200rpx;
    color:#766;
    font-size:26rpx;
  }
  /*.mask{*/
    /*position: absolute;*/
    /*z-index:999;*/
    /*opacity: 0.5;*/
    /*width:100%;*/
    /*height:365rpx;*/
    /*border:1px solid #f00;*/
  /*}*/
  /*.mask image{*/
    /*width:100%;*/
    /*height:365rpx;*/
  /*}*/
</style>
