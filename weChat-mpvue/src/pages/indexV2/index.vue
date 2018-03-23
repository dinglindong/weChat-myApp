<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <button @click="click">请求按钮</button>
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>

  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/logs'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    click(){
      var data = "paramJson:" + JSON.stringify({"channelId":0,"pageIndex":1,"pageSize":2,"sessionCustomerId":"1399252409974","customerId":"1399252409974","platformId":"1"});
      wx.request({
        url: 'https://m.allinmd.cn/mcall/recommend/customer/tag/json_list/', //仅为示例，并非真实的接口地址
        data: data,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function(res) {
          console.log(res.data)
        }
      })
//      wx.request({
//        url: 'https://m.allinmd.cn/mcall/cms/resource/json_list/', //仅为示例，并非真实的接口地址
//        data: {paramJson:JSON.stringify({"channelId":0,"pageIndex":1,"pageSize":2,"sessionCustomerId":"1399252409974","customerId":"1399252409974","platformId":"1"})},
//        header: {
//          'content-type': 'application/json' // 默认值
//        },
//        success: function(res) {
//          console.log(res.data)
//        }
//      })
    },
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
</style>
