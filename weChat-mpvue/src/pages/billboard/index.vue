<template>
  <section class="coainter">
    <p class="title">人气榜</p>
    <section class="mySupport">
      <p>我支持的</p>
      <section class="module" @click="jumpDetails">
        <section>
          <span class="sort">1</span>
          <image src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"></image>
          <span class="meetingName">XXX分会场名</span>
          <span class="popularity">100人气</span>
        </section>
      </section>
      <section class="module" @click="jumpDetails">
        <section>
          <span class="sort">1</span>
          <image src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"></image>
          <span class="meetingName">XXX分会场名</span>
          <span class="popularity">100人气</span>
        </section>
      </section>
    </section>
    <section class="billboard">
      <section class="module">
        <span class="sort">1</span>
        <image src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"></image>
        <span class="meetingName">XXX分会场名</span>
        <span class="popularity">100人气</span>
      </section>
      <section class="module">
        <span class="sort">1</span>
        <image src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"></image>
        <span class="meetingName">XXX分会场名</span>
        <span class="popularity">100人气</span>
      </section>
      <section class="module">
        <span class="sort">1</span>
        <image src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"></image>
        <span class="meetingName">XXX分会场名</span>
        <span class="popularity">100人气</span>
      </section>
      <section class="module">
        <span class="sort">1</span>
        <image src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"></image>
        <span class="meetingName">XXX分会场名</span>
        <span class="popularity">100人气</span>
      </section>
      <section class="module">
        <span class="sort">1</span>
        <image src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"></image>
        <span class="meetingName">XXX分会场名</span>
        <span class="popularity">100人气</span>
      </section>
      <section class="module">
        <span class="sort">1</span>
        <image src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"></image>
        <span class="meetingName">XXX分会场名</span>
        <span class="popularity">100人气</span>
      </section>
      <section class="module">
        <span class="sort">1</span>
        <image src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"></image>
        <span class="meetingName">XXX分会场名</span>
        <span class="popularity">100人气</span>
      </section>
      <section class="module">
        <span class="sort">1</span>
        <image src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"></image>
        <span class="meetingName">XXX分会场名</span>
        <span class="popularity">100人气</span>
      </section>
      <section class="module">
        <span class="sort">1</span>
        <image src="http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"></image>
        <span class="meetingName">XXX分会场名</span>
        <span class="popularity">100人气</span>
      </section>





    </section>
  </section>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    methods:{
      jumpDetails(){
        wx.navigateTo({
          url: '../courseChairman/courseChairman',
        })
      }
    },
    onShareAppMessage() {
      return {
        title: '我和【主席名】一起录制了短视频为 【分会名】打call，快来看看吧！',
        path: '/pages/start/start'
      }
    }
  }
</script>

<style>
  /*页面布局*/
  .coainter{
    text-align: center;
  }
  .title{
    padding:10rpx 0;
    border-bottom:1rpx solid #aaa;
  }
  .mySupport,.billboard{
    padding:30rpx;
    overflow: auto;
  }
  .mySupport{
    border-bottom: 10px solid #aaa;
  }
  .mySupport p {
    text-align: left;
  }
  /*我支持的内容排列*/
  .mySupport image{
    width:100rpx;
    height:100rpx;
    vertical-align: middle;
    margin:0 20rpx;
  }
  .mySupport .module{
    margin-top:40rpx;
    /*border:1px solid #f00;*/
    float:left;
    width:100%;
  }
  /*人气排行榜*/
  .billboard image{
    width:100rpx;
    height:100rpx;
    vertical-align: middle;
    margin:0 20rpx;
  }
  .billboard .module{
    margin-top:40rpx;
    /*border:1px solid #f00;*/
    float:left;
    width:100%;
  }
  /*共有模块*/
  .module .popularity{
    margin-left:120rpx;
  }
</style>
