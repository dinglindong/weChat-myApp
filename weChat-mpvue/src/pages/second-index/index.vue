<template>
  <section class="container">
    <section class="tabSwitch">
      <article><span class="active">官方图集</span></article>
      <article><span>用户图集</span></article>
    </section>

    <section class="content">
      <scroll-view class="scroll-view_H" scroll-y>
        <view  v-for="(v,i) in imgaList" :key="i" class="scroll-view-item"><image :src="v" @click="previewImage(v)"></image></view>
      </scroll-view>
    </section>

    <section class="service">
      <button class="left">CAOS2018</button>
      <button class="right">有奖上传</button>
    </section>

    <section class="footer">
      <button>我的抽奖码</button>
      <button>我上传的图片</button>
    </section>
  </section>
</template>

<script>
  export default {
    data(){
      return {
        imgaList:[
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2129846603,1401619372&fm=200&gp=0.jpg",
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522732982131&di=d6b073bb1a7e2882772c66e9b3003935&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D1017759020%2C224743705%26fm%3D214%26gp%3D0.jpg",
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522732996912&di=c92e36ef014aae764d6e711678daa153&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F10%2F87%2F42%2F18b1OOOPIC40.jpg",
          "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=f86459adeddde711e7d244f09fd4a926/dbb44aed2e738bd49e1a5b99a98b87d6277ff95b.jpg",
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522733020840&di=2b394f175f7e915666cec462fec1554b&imgtype=0&src=http%3A%2F%2Fpic1.vip.com%2Fupload%2Fmerchandise%2F187761%2FMQD-M142W1306305-15_1.jpg",
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2798323348,3182669990&fm=200&gp=0.jpg",
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3418043705,3523926523&fm=27&gp=0.jpg",
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522733066950&di=ac7eb264947f24fcfcf7be37b6e6ede7&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D48858afd01d162d991e36a5c78a7cc80%2F0b46f21fbe096b63bca99a6907338744ebf8ac53.jpg",
          "http://img.jj20.com/up/allimg/911/120515140005/151205140005-1-lp.jpg",
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
        ]
      }
    },
    methods:{
      previewImage: function (current) {
        let t = this;
        wx.previewImage({
          current: current, // 当前显示图片的http链接
          urls: t.imgaList // 需要预览的图片http链接列表
        })
      },
      upload(){
        var timestamp = new Date().getTime();
        wx.request({
          url: 'https://wx.jfoto.cn/api/image/list',
          data:{
            galleryid:'813947',
            order:'测试',
            lasttime:timestamp
          }
        })
      }
    },
    mounted(){
      this.upload();
    }
  }
</script>

<style>
  .container{
    width:100%;
  }
  .tabSwitch{
    width:100%;
    height:100rpx;
  }
  .tabSwitch article{
    float:left;
    width:50%;
    text-align: center;
    height:100rpx;
    line-height: 100rpx;
  }
  .tabSwitch article .active{
    padding: 10rpx 5rpx;
    border-bottom: 4rpx solid #aaa;
  }
  .content{
    width:100%;
    margin-top:20rpx;
  }
  .content scroll-view {
    height:600rpx;
  }
  .content image{
    width:243rpx;
    height:200rpx;
    float:left;
    margin-left:6rpx;
  }
  /*客服部分按钮*/
  .service,.footer{
    width:100%;
    height:80rpx;
  }
  .service button{
    width:180rpx;
    font-size:28rpx;
    margin-top:100rpx;
  }
  .service .left{
    float:left;
    margin-left:50rpx;
  }
  .service .right{
    float:right;
    margin-right:50rpx;
  }
  /*页脚部分*/
  .footer{
    position:absolute;
    bottom:0rpx;
  }
  .footer button {
    width:50%;
    float:left;
    border-radius:0rpx;
  }
</style>
