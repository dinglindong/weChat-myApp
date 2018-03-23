<template>
  <section class="coainter">
    <view :hidden="!isShow">
      <view class='wx-mask'></view>
      <view class='wx-dialog'>
        <view class='wx-dialog-title'>{{ title }}</view>
        <view class='wx-dialog-footer'>
          <view  @click="bindButtonTap">{{ confirmText }}</view>
        </view>
      </view>
    </view>
    <view :hidden="videShow">
      <video class="video" :src="videoLink" objectFit="cover"></video>
      <button class="btn leftBtn" @click="again">重新录制</button>
      <button class="btn rightBtn" @click="fulfil">完成录制</button>
    </view>
  </section>
</template>

<script>
  export default{
    data(){
      return {
        isShow:true,
        videShow:true,
        title:'建议您横屏录制，效果更佳',
        confirmText:'我知道了',
        videoLink:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
      }
    },
    methods:{
      bindButtonTap: function() {
        let t = this;
        t.isShow = false;
        wx.chooseVideo({
          sourceType: ['album', 'camera'],
          maxDuration: 10,
          compressed:false,
          camera: ['front', 'back'],
          success: function (res) {
            t.videoLink = res.tempFilePath;
            t.videShow = false
          },
          fail:function(error){
            t.isShow = true;
          }
        })
      },
      again(){
        let t = this;
        wx.chooseVideo({
          sourceType: ['album', 'camera'],
          maxDuration: 10,
          compressed:false,
          camera: ['front', 'back'],
          success: function (res) {
            t.videoLink = res.tempFilePath
          }
        })
      },
      fulfil(){
        let t = this;
        wx.showLoading({
          title: '加载中',
        });
        wx.uploadFile({
          url: 'http://m.allinmd.cn/call/qiniu/storage/saveFileToTable/', //仅为示例，非真实的接口地址
          filePath: t.videoLink,
          name: 'file',
          formData:{
            'user': 'test'
          },
          success: function(res){
            var data = res.data;

            setTimeout(function(){
              wx.hideLoading()
              wx.navigateTo({
                url: '../fulfil/fulfil',
              })
            },2000);
          }
        })

      }
    }
  }
</script>

<style>
  .coainter{
    text-align: center;
    margin-top:200rpx;
  }
  .wx-mask{
    position: fixed;
    z-index: 8;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
  }
  .wx-dialog{
    position: fixed;
    z-index: 9;
    width: 80%;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: #FFFFFF;
    text-align: center;
    border-radius: 10rpx;
  }
  .wx-dialog-title{
    font-size: 30rpx;
    height:220rpx;
    line-height: 220rpx;
  }
  .wx-dialog-footer{
    align-items: center;
    position: relative;
    height:90rpx;
    line-height: 90rpx;
    font-size: 30rpx;
    text-align: center;
    border-top:1px solid #aaa;
    color:#00f;
  }
  .video{
    width:100%;
    z-index:10;
  }
  .btn{
    position:absolute;
    bottom:0rpx;
    margin-bottom: 200rpx;
  }
  .leftBtn{
    left:80rpx;
  }
  .rightBtn{
    right:80rpx;
  }

</style>
