<template>
  <section class="coainter">
    <section class="logobox">
      <image class="logo" src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=ed9169dad62a283443a6310d638eaed7/50da81cb39dbb6fddfae9ce10b24ab18962b377b.jpg"></image>
    </section>
    <section class="content">
      <text class="name">唯医-小唯</text>
      <article class="description">这里面应该是推送过来固定的内容，应该是从服务号的连接</article>
    </section>

  </section>
</template>

<script>
  export default {

  }
</script>

<style>
  .coainter{
    padding:50rpx;
  }
  .logobox{
    width:100rpx;
    height:300rpx;
    float:left;
  }
  .logo{
    width:100rpx;
    height:100rpx;
  }
  .content{
    float:left;
    margin-left:40rpx;
    width:510rpx;
  }
  .description{
    margin-top:80rpx;
    width:510rpx;
    height:260rpx;
    border:1px solid #aaa;
  }
</style>
