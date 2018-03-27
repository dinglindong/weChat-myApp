<template>
  <section class="coainter">
    <canvas style="width: 746rpx; height: 1200rpx;border:1px solid #f00" canvas-id="myCanvas"></canvas>
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

    <section style="width:100%;height:800rpx;border:1px solid #f00">
      <image :src="success"></image>
    </section>

    <article class="savephoto">
      <button @click="savePhoto">保存到相册</button>
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
        ],
        success:""
      }
    },
    methods:{
      savePhoto(){
        let t = this;
        wx.showLoading({
          title: '正在生成图片',
          mask: true,
        });
//        wx.getImageInfo({
//          src: 'https://img04.allinmd.cn/activity/20170830/1503993373800.jpg',
//          success: function (res) {
//            console.log(res.width);
//            console.log(res.height);
//          }

//        });

        var url ='';
        wx.downloadFile({
          url:'http://img99.allinmd.cn/ad/2017/05/15/1398_1494833535042.jpg',
          success:function(res){
            url = res.tempFilePath;
            var ctx = wx.createCanvasContext('myCanvas');
            ctx.drawImage(url, 0, 0, 375, 300);
            ctx.drawImage(url, 20, 400, 50, 50);
            ctx.drawImage(url, 305, 400, 50, 50);
            ctx.setFontSize(16);
            ctx.setTextAlign('left');
            ctx.fillText('用户名', 80, 420);
            ctx.fillText('CAOS2018有我更精彩', 80, 450);
            ctx.draw();
            t.save();
          }
        });
      },
      save(){
        let t = this;
        //把当前画布指定区域的内容导出生成指定大小的图片，并返回文件路径。
        wx.canvasToTempFilePath({
          canvasId: 'myCanvas',
          success: function(res) {
            t.success = res.tempFilePath;
            console.log(t.success)
            wx.saveImageToPhotosAlbum({
              filePath:res.tempFilePath,
              success(res) {
                wx.hideLoading();
                console.log('已经保存成功')
              }
            })
          }
        });
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
