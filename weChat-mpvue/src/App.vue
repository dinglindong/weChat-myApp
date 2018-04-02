<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.getStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
    /*前端获取openId的方法*/
    //*调取登录信息获取code*//
    wx.login({
      success: function(loginRes) {
        if (loginRes.code) {
          //调用系统验证，在向微信获取openid
          wx.getUserInfo({
            success:function(res){
              var APPID = 'wxaeb208664e642355';
              var SECRET = '1275d4508ae8d611c9ba026ac01ff26f';
              wx.request({
                url: 'https://api.weixin.qq.com/sns/jscode2session?appid='+APPID+'&secret='+SECRET+'&js_code='+loginRes.code+'&grant_type=authorization_code',
                success:function(response){
                  console.log('openid:' + response.data.openid);
                },
              })
            }
          })
        }
      }
    });
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
