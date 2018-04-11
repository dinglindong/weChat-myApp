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
        <image :src="data.avatarUrl"></image>
        <p>{{data.nickName}}</p>
        <p>CAOS2018有我更精彩</p>
      </aside>
      <aside class="code">
        <image src="../../static/image/gh_e6aafc866fd7_258.jpg"></image>
      </aside>
    </article>

    <section style="width:100%;height:800rpx;border:1px solid #f00">
      <image :src="success"></image>
    </section>

    <article class="savephoto">
      <button @click="savePhoto">保存到相册</button>
      <button open-type="launchApp" app-parameter="wechat" binderror="launchAppError">打开APP</button>
    </article>
  </section>
</template>

<script>
//  import image from 'static/image/gh_e6aafc866fd7_258.jpg'
//  console.log(image)
  export default{
    data(){
      return {
        dataList:[
          "https://img04.allinmd.cn/activity/20170830/1503993373800.jpg",
          "https://img04.allinmd.cn/activity/20170830/1503993373800.jpg",
          "https://img04.allinmd.cn/activity/20170830/1503993373800.jpg",
          "https://img04.allinmd.cn/activity/20170830/1503993373800.jpg"
        ],
        success:"",
        data:{},
        scourse:''
      }
    },
    methods:{
      savePhoto(){
        let t = this;
        wx.showLoading({
          title: '正在生成图片',
          mask: true,
        });
        var url ='';
        wx.downloadFile({
          url:'https://m.allinmd.cn/images/img50/stepOne/videoAds.jpg',
//          url:t.data.avatarUrl,
          success:function(res){
            url = res.tempFilePath;
            var ctx = wx.createCanvasContext('myCanvas');


            ctx.fillStyle = '#fff';
            ctx.fillRect(0, 0, 375, 1000);

            ctx.save(); // 保存当前ctx的状态
            ctx.arc(45,425,30,0,Math.PI*2,true); //画出圆
            ctx.clip(); //裁剪上面的圆形
            ctx.drawImage(url, 20, 400, 50, 50); // 在刚刚裁剪的园上画图
            ctx.restore(); // 还原状态

            ctx.drawImage(url, 0, 0, 375, 300);


            ctx.beginPath();
//            ctx.fillStyle = '#93BF55';
            ctx.lineWidth= 5;
//            ctx.strokeStyle = '#93BF55';
            ctx.arc(45,425,30,0,Math.PI*2,true);
            ctx.stroke();
            ctx.closePath();


            ctx.beginPath();
//            ctx.fillStyle = '#93BF55';
            ctx.lineWidth= 5;
//            ctx.strokeStyle = '#93BF55';
            ctx.strokeRect(305,400,50,50);
            ctx.stroke();
            ctx.closePath();

            ctx.setFontSize(16);
            ctx.setTextAlign('left');
            ctx.fillText('CAOS2018有我更精彩', 80, 450);
            ctx.font = "bold 20px Arial";
            ctx.fillText(t.data.nickName, 80, 420);

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
            wx.saveImageToPhotosAlbum({
              filePath:res.tempFilePath,
              success(res) {
                wx.hideLoading();
                //console.log('已经保存成功')
              }
            })
          }
        });
      },
      getUserInfo(){
        let t = this;
        wx.getUserInfo({
          success: function(res) {
            t.data = res.userInfo;
            //console.log(res)
          }
        })
      }
    },
    created(){
      this.getUserInfo()
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
