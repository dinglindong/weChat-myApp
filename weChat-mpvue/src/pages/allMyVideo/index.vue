<template>
  <section class="coainter">
    <section class="module" @click="jumpIndexv2">
      <p>支持会场：XXXX中西医结合</p>
      <article>
        <aside class="video-module left">
          <video :src="videoLink" objectFit="cover"></video>
          <image src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"></image>
          <span>（主席名）</span>
        </aside>
        <aside class="video-module right">
          <video :src="videoLink" objectFit="cover"></video>
          <image src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"></image>
          <span>（用户名）</span>
        </aside>
      </article>
    </section>

    <section class="module" @click="jumpIndexv2">
      <p>支持会场：XXXX中西医结合</p>
      <article>
        <aside class="video-module left">
          <video :src="videoLink" objectFit="cover"></video>
          <image src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"></image>
          <span>（主席名）</span>
        </aside>
        <aside class="video-module right">
          <video :src="videoLink" objectFit="cover"></video>
          <image src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"></image>
          <span>（用户名）</span>
        </aside>
      </article>
    </section>

    <section class="module" @click="jumpIndexv2">
      <p>支持会场：XXXX中西医结合</p>
      <article>
        <aside class="video-module left">
          <video :src="videoLink" objectFit="cover"></video>
          <image src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"></image>
          <span>（主席名）</span>
        </aside>
        <aside class="video-module right">
          <video :src="videoLink" objectFit="cover"></video>
          <image src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"></image>
          <span>（用户名）</span>
        </aside>
      </article>
    </section>
  </section>
</template>

<script>
  export default {
    data(){
      return {
        videoLink:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
      }
    },
    methods:{
      jumpIndexv2:function(){
        wx.navigateTo({
          url: '../indexV2/indexV2',
        })
      }
    }

  }
</script>

<style>
  .module p{
    padding:30rpx;
  }
  article{
    padding-bottom: 20rpx;
    border-bottom:1rpx solid #aaa;
    overflow: auto;
  }
  .video-module{
    width:365rpx;
    float:left;
  }
  .video-module video{
    width:100%;
    height:200rpx;
  }
  .video-module image {
    width:60rpx;
    height:60rpx;
    border-radius:30px;
    margin-left:20rpx;
    vertical-align:bottom;
  }
  .module .right{
    margin-left:20rpx;
  }
</style>
