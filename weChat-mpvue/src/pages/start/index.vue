<template>
  <section class="container">
    <view class="section">
      <!--<section class="mask">-->
        <!--<image src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"></image>-->
      <!--</section>-->
      <video id="myVideo" :src="videoLink" objectFit="cover" @click="myDB">
        <cover-view>
          <cover-image></cover-image>
        </cover-view>
      </video>
      <section class="text">
        <p class="description">亲爱的McAdoo，录制短视频，为xxx打Call~!你还可以参与唯医抽奖活动哦！</p>
        <button class="supportBtn" @click="bindButtonTap">录制视频支持他</button>
        <text @click="jumpSupper">更换支持者</text>
        <button class="service" open-type="contact" session-from="weapp">CAOS2018客服</button>
      </section>
    </view>
    <button @click="myDB">点击</button>
    <!--<div>{{message}}</div>-->
    <!--<video id="myVideo" src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400" >-->
      <!--<cover-view class="controls">-->
        <!--<cover-view class="play" @click="play">-->
          <!--<cover-image class="img" src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" />-->
        <!--</cover-view>-->
        <!--<cover-view class="pause" @click="pause">-->
          <!--<cover-image class="img" src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" />-->
        <!--</cover-view>-->
        <!--<cover-view class="time">00:00</cover-view>-->
      <!--</cover-view>-->
    <!--</video>-->
  </section>
</template>

<script>
  export default {
    data(){
      return {
        message:'你好，这个是一个start页面',
        videoLink:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        touchStartTime:'',
        touchEndTime:'',
        flag:true,
        last:0//初始化上次的时间
      }
    },
    onReady: function (res) {
      this.videoContext = wx.createVideoContext('myVideo')
    },
    methods:{
      bindButtonTap: function() {
        wx.navigateTo({
          url: '../rcord/rcord',
        })
      },
      jumpSupper(){
        wx.navigateTo({
          url: '../courseChairman/courseChairman',
        })
      },
      clickBtn(e){
        console.log(e)
        var that = this;
        console.log('点击1次');
        // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
        if (that.touchEndTime - that.touchStartTime < 350) {
          // 当前点击的时间
          var currentTime = e.timeStamp;
          var lastTapTime = that.lastTapTime;
          // 更新最后一次点击时间
          that.lastTapTime = currentTime;
          // 如果两次点击时间在300毫秒内，则认为是双击事件
          if (currentTime - lastTapTime < 300) {
            console.log('点击2次');
              if(this.flag){
                this.videoContext.play();
                this.flag = false;
              }else{
                this.videoContext.pause();
                this.flag = true;
              }

//            console.log("double tap")
//            // 成功触发双击事件时，取消单击事件的执行
//            clearTimeout(that.lastTapTimeoutFunc);
//            wx.showModal({
//              title: '提示',
//              content: '双击事件被触发',
//              showCancel: false
//            })
          }
        }
      },
      /// 按钮触摸开始触发的事件
      touchStart: function(e) {
        this.touchStartTime = e.timeStamp
      },
      clickBat(a){
        console.log(a);
      },
      /// 按钮触摸结束触发的事件
      touchEnd: function(e) {
        this.touchEndTime = e.timeStamp
      },
      myDB:function(e){
        console.log(1111111111111111)
        var c = e.timeStamp;//当前点击的时间

        var L = this.last;//上一次点击的时间

        if(L>0){

          if(c-L<500){

            console.log("作双击");
            if(this.flag){
              this.videoContext.play();
              this.flag = false;
            }else{
              this.videoContext.pause();
              this.flag = true;
            }

          }else{

            console.log("作点击");

          }

        } else{

          console.log("第一次点击");

        }

        this.last = c;

      },
      play() {
        console.log(1);
        this.videoContext.play()
      },
      pause() {
        console.log(2);
        this.videoContext.pause()
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
  .controls {
    position: relative;
    top: 50%;
    height: 50px;
    margin-top: -25px;
    display: flex;
  }
  .play,.pause,.time {
    flex: 1;
    height: 100%;
  }
  .time {
    text-align: center;
    background-color: rgba(0, 0, 0, .5);
    color: white;
    line-height: 50px;
  }
  .img {
    width: 40px;
    height: 40px;
    margin: 5px auto;
  }
</style>
