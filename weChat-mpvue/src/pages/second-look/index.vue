<template>
  <section class="coainter">
    <article class="images">
      <swiper>
        <block v-for="(v,i) in dataList" :key="i">
          <swiper-item>
            <image :src="v" class="slide-image"/>
          </swiper-item>
        </block>
      </swiper>
    </article>

    <article class="user">
      <aside class="userInfo">
        <image src="https://img04.allinmd.cn/activity/20170830/1503993373800.jpg"></image>
        <p>用户名</p>
        <p>CAOS2018有我更精彩</p>
      </aside>
      <aside class="code">
        <image src="https://img04.allinmd.cn/activity/20170830/1503993373800.jpg"></image>
      </aside>
    </article>

    <article class="savephoto">
      <button>保存到相册</button>
    </article>
  </section>
</template>

<script>
  export default{
    data(){
      return {
        dataList:[
          "https://img04.allinmd.cn/activity/20170830/1503993373800.jpg",
          "https://img04.allinmd.cn/activity/20170830/1503993373800.jpg",
          "https://img04.allinmd.cn/activity/20170830/1503993373800.jpg",
          "https://img04.allinmd.cn/activity/20170830/1503993373800.jpg"
        ]
      }
    }
  }
</script>

<style>
  .coainter{
    width:100%;
  }
  .coainter .images{
    width:100%;
    height:600rpx;
  }
  .coainter .images swiper{
    height:600rpx;
  }
  .coainter .images image{
    width:100%;
    height:600rpx;
  }
  /*中间部分*/
  .user{
    margin-top:200rpx;
    height:200rpx;
    position: relative;
  }
  .user .userInfo{
    float:left;
    width:70%;
    margin-left:40rpx;
  }
  .user .userInfo image{
    width:100rpx;
    height:100rpx;
    float:left;
    margin-right:20rpx;
  }
  .user .userInfo p{
    font-size:32rpx;
    margin-top:5rpx;

  }
  .user .code{
    float:right;
    margin-right:40rpx;
  }
  .user .code image{
    width:100rpx;
    height:100rpx;
  }
  /*底部保存相册*/
  .savephoto{
    position: absolute;
    width:100%;
    bottom:0rpx;
  }
</style>
