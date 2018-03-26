<template>
  <section class="container">
    <h3>上传三张CAOS2018现场图片，即可获得抽奖资格，赢取唯医好礼！</h3>
    <button @click="clickBtn('',camera)">拍摄</button>
    <button @click="clickBtn(album,'')">从相册选择</button>
  </section>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    methods:{
      clickBtn(album,camera){
        console.log(album,camera);
        wx.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: [album, camera], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            var tempFilePaths = res.tempFilePaths
          }
        })
      }

    }
  }
</script>

<style>

</style>
