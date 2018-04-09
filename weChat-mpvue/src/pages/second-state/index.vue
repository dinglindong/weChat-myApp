<template>
  <section class="conainter">
    <h3>发布成功！</h3>
    <p>您的抽奖码是：123456</p>
    <p>您可以在“唯医社区”服务号内回复进行抽奖。</p>
    <button>预览分享图片</button>
  </section>
</template>

<script>
  export default {
    data(){
      return {
        data:''
      }
    },
    methods:{
      ajax(){
        wx.request({
          //该请求地址是即享图片的请求的地址，模拟测试一下请求200
          url: 'https://wx.jfoto.cn/api/image/list',
          data:{
            galleryid:'813947',
            order:'测试',
            lasttime:11
          },
          method:"GET",  //默认位GET请求
          success: function(res) {
                wx.getImageInfo({
                  //获取图片的信息必须是https/指定域名
                  src: 'https://img05.allinmd.cn/public1/M00/54/50/ooYBAFmeQyuAM8NEADmmFhecazw032_c_t_300_200.jpg',
                  success:function(data){
                    console.log('请求成功',data);
                  },
                  fail:function(){
                    console.log('请求失败~')
                  }
                })
          },
          fail: function(err) {

          }
        })
      }
    },
    mounted(){
//      this.ajax();
    }
  }
</script>

<style>
  .conainter{
    width:100%;
  }
  .conainter h3{
    text-align: center;
    font-size:40rpx;
    margin: 60rpx;
  }
  .conainter p{
    margin-left:60rpx;
    font-size:32rpx;
    height:50rpx;
    line-height:50rpx;
  }
  .conainter button{
    width:80%;
    margin-top:400rpx;
  }
</style>
