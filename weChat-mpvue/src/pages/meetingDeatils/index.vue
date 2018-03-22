<template>
  <section>
    <view>测书</view>
    <image src="'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'"></image>
    <image src="https://img04.allinmd.cn/activity/20170830/1503993373800.jpg"></image>
    <pubilcFooter :text="userInfo.nickName" ></pubilcFooter>
  </section>

</template>

<script>
  import pubilcFooter from '@/components/pubilcFooter.vue'
  export default {
    data(){
      return {
        userInfo: {
          nickName:'我要支持会场'
        },
        dataList:[
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        indicatorDots: true,
        indicatorColor: 'rgba(255, 0, 0, .3)',
        autoplay: true,
        interval: 5000,
        duration: 1000
      }
    },
    components:{
      pubilcFooter
    }
  }
</script>

<style>

</style>
