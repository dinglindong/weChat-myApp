<template>
  <section class="coainter" :class="maskState">
    <p class="shareText" :hidden="isShow">
      <span class="top"></span><span class="buttom">|</span>
      <span class="text">点击"..."，选择“转发”，完成分享</span>
    </p>
    <section :hidden="!isShow">
      <section class="videobox" >
        <video class="video" :src="videoLink" objectFit="cover"></video>
        <p>您已成功支持【xxx会场】！</p>
      </section>

      <section class="figure">
        这里应该存放主席发送过来的语音
      </section>

      <section class="share">
        <p>最后完成分享，获得抽奖机会！赢取超值大奖！</p>
        <button  @click="shareAll">分享给朋友，获取抽奖码</button>
        <p @click="backIndex">返回首页</p>
      </section>
    </section>
  </section>
</template>

<script>
  export default {
    data(){
      return {
        videoLink:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        maskState:'',
        isShow:true
      }
    },
    methods:{
      shareAll(){
        this.maskState = 'wx-mask';
        this.isShow = false;
      },
      backIndex(){
        wx.navigateTo({
          url: '../start/start',
        })
      }
    },
    onShareAppMessage(res) {
      return {
        title: '我和【主席名】一起录制了短视频为 【分会名】打call，快来看看吧！',
        path: '/pages/start/start',
        success:function(){
          wx.navigateTo({
            url: '../shareSuccess/shareSuccess',
          })
        }
      }
    },
  }
</script>

<style>
  .coainter{
    text-align: center;
    color:#aaa;
    font-size:32rpx;
    width:100%;
  }
  .videobox .video{
    width:100%;
    height:360rpx;
  }
  .videobox p{
    margin-top:100rpx;
  }
  .figure{
    background:#ccc;
    width:100%;
    height:300rpx;
    line-height:300rpx;
  }
  .share p{
    margin:40rpx;
    font-size:30rpx;
  }
  .share button {
    width:420rpx;
    font-size:32rpx;
  }
  .wx-mask{
    position: fixed;
    z-index: 8;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    /*background: rgba(0, 0, 0,0.6);*/
    background: #999;
  }
  .shareText{
    z-index:9;
    color:#fff;
    height:250rpx;
    position:relative;
  }
  .shareText .top{
    display: inline-block;
    position:absolute;
    right:120rpx;
    border-top:30rpx solid #999;
    border-bottom:30rpx solid #fff;
    border-left:30rpx solid #999;
    border-right:30rpx solid #999;
  }
  .shareText .buttom{
    position:absolute;
    top:60rpx;
    right:140rpx;
    display: block;
    width:20rpx;
    height:60rpx;
    background: #fff;
    text-align: center;
  }
  .shareText .text{
    position:absolute;
    left:0;
    right:0;
    top:140rpx;
  }
</style>
