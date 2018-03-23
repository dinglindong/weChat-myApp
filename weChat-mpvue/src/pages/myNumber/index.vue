<template>
  <section class="coainter">
    <p class="name">我的抽奖码</p>
    <article>
      <p>分享短视频抽奖</p>
      <aside class="content">
        <p>抽奖码：<span id="number">123456</span></p>
        <p>获得时间：5月1日 18：00</p>
        <text class="clone" @click="clone" selectable='true'>复制</text>
      </aside>
    </article>
  </section>
</template>

<script>
  export default {
    data(){
      return {
        touchStartTime:'',
        touchEndTime:''
      }
    },
    methods:{
      clone(){
        wx.setClipboardData({
          data: '123456',
          success: function(res) {
            wx.getClipboardData({
              success: function(res) {
                console.log(res.data); // data
                wx.showToast({
                  title: '复制成功',
                })
              }
            })
          }
        })
      }
    }
  }
</script>

<style>
  .coainter{
    width:100%;
  }
  .coainter .name{
    text-align: center;
    padding:40rpx;
    border-bottom: 1rpx solid #aaa;
  }
  .coainter article{
    margin:40rpx;
    font-size:28rpx;
  }
  .coainter article .content{
    margin-top:20rpx;
    overflow: auto;
    position: relative;
    height:100rpx;
  }
  .content p{
    font-size:32rpx;
  }
  .content .clone{
    text-align: center;
    position:absolute;
    right:0rpx;
    top:20rpx;
    display: inline-block;
    width:160rpx;
    height:60rpx;
    line-height: 60rpx;
    color:#000;
    background:#bbb;
  }
</style>
