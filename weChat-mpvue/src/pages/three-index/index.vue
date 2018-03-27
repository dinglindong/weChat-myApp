<template>
  <section class="conainter">
    <section class="videoBox">
      <video id="myVideo" :src="videoLink" objectFit="cover"></video>
    </section>
    <button class="openCaos" @click="openCaos">开启CAOS2019</button>
    <button class="myNumber" @click="myNumber">我的抽奖码</button>
  </section>
</template>

<script>
  export default {
    data(){
      return {
        videoLink:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
      }
    }
  }
</script>

<style>
  .conainter{
    width:100%;
  }
  .conainter .videoBox video{
    width:100%;
    height:400rpx;
  }
  .conainter .openCaos{
    margin-top:100rpx;
    width:400rpx;
  }
  .conainter .myNumber{
    position: absolute;
    bottom:0rpx;
    width:100%;
  }
</style>
