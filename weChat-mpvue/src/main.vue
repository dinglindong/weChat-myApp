<script>
  import utils from './utils/request'
  const PATH = {
    verifyInfo:'https://caosmini.allinmd.cn/services/customer/unite/info/v1/getWeiXinSession',
    userInfo:'https://caosmini.allinmd.cn/services/customer/unite/info/v2/create'
  };
  export default {
    data(){
      return {
        code:'',
        sessionKey:'',
        encryptedData:'',
        iv:''
      }
    },
    created () {
      // 调用API从本地缓存中获取数据
      const logs = wx.getStorageSync('logs') || []
      logs.unshift(Date.now())
      wx.setStorageSync('logs', logs)

      console.log('app created and cache logs by setStorageSync')

      this.logins();
    },
    methods:{
      logins(){
        let t = this;
        wx.login({
          success: function (res) {
            if (res.code) {
              wx.setStorageSync('userCode', JSON.stringify(res.code));
              t.code = res.code;
              t.getUserInfo();
            }
          }
        })
      },
      getUserInfo(){
        let t = this;
        wx.getUserInfo({
          success:function(res){
            if(res && res.encryptedData && res.iv){
              t.iv = res.iv;
              t.encryptedData = res.encryptedData;
              t.getVerifyInfo();
            }
          },
          fail:function(){
            wx.navigateTo({
              url: '../index/main',
            })
          }
        })
      },
      getVerifyInfo(){
        let t = this;
        utils.request({
          url: PATH.verifyInfo,
          data: {
            code: t.code
          },
          success:function(res){
            //发起网络请求，保存用户信息
            if(res.data && res.data.session_key){
              t.sessionKey = res.data.session_key;
              t.saveUserInfo();
            }
          }
        })
      },
      saveUserInfo(){
        let t = this;
        utils.request({
          url: PATH.userInfo,
          data: {
            encryptedData:t.encryptedData,
            sessionKey:t.sessionKey,
            iv:t.iv,
          },
          success:function(res){
            if(res.data && res.data.responsePk){
              try {
                wx.setStorageSync('customerId',JSON.stringify(res.data.responsePk));
              } catch (e) {
              }
            }
          }
        })
      }
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
    padding: 200rpx 0;
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
