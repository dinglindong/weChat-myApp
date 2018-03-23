<template>
  <section class="coainter">
    <h3>分享成功！</h3>
    <aside class="info">
      <p>您的抽奖码是：XXXXX</p>
      <p>您可以在“唯医社区”服务号内回复“抽奖”进行抽奖。</p>
    </aside>
    <button @click="backShare">继续分享</button>
    <button @click="fulfill">完成</button>
  </section>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    methods:{
      backShare(){
        wx.navigateTo({
          url: '../fulfil/fulfil',
        })
      },
      fulfill(){
        wx.navigateTo({
          url: '../indexV2/indexV2',
        })
      }
    }
  }
</script>

<style>
  .coainter{
    width:100%;
    text-align: center;
  }
  .coainter h3{
    margin:50rpx;
    font-size:50rpx;
  }
  .coainter .info{
    text-align: left;
    margin:50rpx;
    font-size:30rpx;
  }
  .coainter button{
    width:400rpx;
    margin:50rpx auto;
  }
</style>
