<template>
  <section class="conainter">
    <button @click="clickBtn">请求数据</button>
    <button >请求数据</button>
    <button open-type="share">分享</button>
  </section>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    methods:{
      clickBtn(){
        //微信请求 wx.request 注意事项
        //默认为get请求方式
        //get请求方式，可以省略 method:"GET",请求header为 'content-type': 'application/json'
        //post请求方式，添加 method:"POST",请求header为 'application/x-www-form-urlencoded'
        wx.request({
          url: 'https://m.allinmd.cn/mcall/cms/doc/getMapAuthorList/',
          data: {
            paramJson:JSON.stringify({
              "channelId":0,
              "pageIndex":1,
              "pageSize":2,
              "sessionCustomerId":"1399252409974",
              "customerId":"1399252409974",
              "platformId":"1"
            })
          },
          method:"GET",
          header: {
            'content-type': 'application/json'
          },
          success: function(res) {
            console.log(res)
          }
        })
      }
    }
  }
</script>

<style>

</style>
