<template>
  <section class="container">
    <view class="section">
      <video :src="videoLink" objectFit="cover"></video>
      <section class="text">
        <p class="description">亲爱的McAdoo，录制短视频，为xxx打Call~!你还可以参与唯医抽奖活动哦！</p>
        <button class="supportBtn" @click="bindButtonTap">录制视频支持他</button>
        <text @click="jumpSupper">更换支持者</text>
        <pubilcFooter :text="userInfo.nickName" ></pubilcFooter>
      </section>
    </view>
    <!--<div>{{message}}</div>-->
  </section>
</template>

<script>
  import pubilcFooter from '@/components/pubilcFooter.vue'
  export default {
    data(){
      return {
        message:'你好，这个是一个start页面',
        videoLink:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        userInfo: {
          nickName:'我的抽奖码'
        }
      }
    },
    methods:{
      bindButtonTap: function() {
        let t = this;
        wx.chooseVideo({
          sourceType: ['album', 'camera'],
          maxDuration: 10,
          camera: ['front', 'back'],
          success: function (res) {
            t.videoLink = res.tempFilePath
          }
        })
      },
      jumpSupper(){
        let t = this;
        wx.navigateTo({
          url: '../courseChairman/courseChairman',
        })
      }
    },
    components: {
      pubilcFooter
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
</style>
