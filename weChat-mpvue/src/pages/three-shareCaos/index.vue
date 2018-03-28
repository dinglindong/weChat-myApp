<template>
  <section class="conainter">
    <button @click="clickBtn">请求数据</button>
    <button @click="promiseBtn">请求数据</button>
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
      },
      promiseBtn(){
        var promise = new Promise((resolve, reject) => {
          resolve (downloadFile())
        });
        promise.then(function(data) {
          console.log(data); // success
          return '测试'
        }, function(err) {
          console.log(err);  // 不执行
        }).then(function(data) {
          // 上一步的then()方法没有返回值
          console.log('链式调用：' + data); // 链式调用：undefined
        }).then(function(data) {
          // ....
        });
        function downloadFile(){
          var str = '';
          wx.downloadFile({
            url:'http://img99.allinmd.cn/ad/2017/05/15/1398_1494833535042.jpg',
//            url:t.data.avatarUrl,
            success:function(res){
              return res.tempFilePath;
            }
          });
        }
//        var promise = new Promise((resolve, reject) => {
//          // 2秒后置为接收状态
//          setTimeout(function() {
//            resolve('success');
//          }, 2000);
//        });
//        promise.then(function(data) {
//          console.log(data); // success
//          return '测试'
//        }, function(err) {
//          console.log(err);  // 不执行
//        }).then(function(data) {
//          // 上一步的then()方法没有返回值
//          console.log('链式调用：' + data); // 链式调用：undefined
//        }).then(function(data) {
//          // ....
//        });
      }
    }
  }
</script>

<style>

</style>
