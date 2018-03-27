<template>
  <section claas="conainter">
    <section class="mapBox">
      <map id="map" longitude="113.324520" latitude="23.099994" scale="14" :controls="controls" :markers="markers" :polyline="polyline" show-location style="width: 100%; height: 300px;"></map>
    </section>
    <p class="info">你是第12345位参与助力者参与助力赢取免费参加CAOS2019资格！</p>
    <button class="share">分享给朋友一起助力</button>
  </section>
</template>

<script>
  export default {
    data(){
      return {
        markers: [{
          iconPath: "image/entrance1.png",
          id: 0,
          latitude: 23.099992,
          longitude: 113.324530,
          width: 50,
          height: 50
        }],
        polyline: [{
          points: [{
            longitude: 113.3245211,
            latitude: 23.10229
          }, {
            longitude: 113.324520,
            latitude: 23.21229
          }],
          color:"#FF0000DD",
          width: 2,
          dottedLine: true
        }],
        controls: [{
          id: 1,
          iconPath: "image/entrance1.png",
          position: {
            left: 0,
            top: 300 - 50,
            width: 500,
            height: 50
          },
          clickable: true
        }]
      }
    }
  }
</script>

<style>
  .conainter{
    width:100%;
  }
  .mapBox{
    width:100%;
    /*height:800rpx;*/
    border:1px solid #f00;
  }
  .info{
    font-size:40rpx;
    margin:100rpx 40rpx;
    text-align: center;
    font-weight: bold;
  }
  .share{
    width:400rpx;
    font-size:30rpx;
  }
</style>
