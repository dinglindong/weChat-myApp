<template>
  <section class="coainter">
    <section class="aside" @click="jumpDetails">
      <image src="https://img04.allinmd.cn/activity/20170830/1503993373800.jpg"></image>
      <text class="follow">已支持</text>
      <p>会场：脊柱脊柱脊柱分会名</p>
      <text>主席：王岩</text>
    </section>
    <section class="aside" @click="jumpDetails">
      <image src="https://img04.allinmd.cn/activity/20170830/1503993373800.jpg"></image>
      <text class="follow">已支持</text>
      <p>会场：脊柱脊柱脊柱分会名</p>
      <text>主席：王岩</text>
    </section>
    <section class="aside" @click="jumpDetails">
      <image src="https://img04.allinmd.cn/activity/20170830/1503993373800.jpg"></image>
      <text class="follow">已支持</text>
      <p>会场：脊柱脊柱脊柱分会名</p>
      <text>主席：王岩</text>
    </section>
    <section class="aside" @click="jumpDetails">
      <image src="https://img04.allinmd.cn/activity/20170830/1503993373800.jpg"></image>
      <text class="follow">已支持</text>
      <p>会场：脊柱脊柱脊柱分会名</p>
      <text>主席：王岩</text>
    </section>
    <section class="aside" @click="jumpDetails">
      <image src="https://img04.allinmd.cn/activity/20170830/1503993373800.jpg"></image>
      <text class="follow">已支持</text>
      <p>会场：脊柱脊柱脊柱分会名</p>
      <text>主席：王岩</text>
    </section>
    <section class="aside" @click="jumpDetails">
      <image src="https://img04.allinmd.cn/activity/20170830/1503993373800.jpg"></image>
      <text class="follow">已支持</text>
      <p>会场：脊柱脊柱脊柱分会名</p>
      <text>主席：王岩</text>
    </section>
    <section class="aside" @click="jumpDetails">
      <image src="https://img04.allinmd.cn/activity/20170830/1503993373800.jpg"></image>
      <text class="follow">已支持</text>
      <p>会场：脊柱脊柱脊柱分会名</p>
      <text>主席：王岩</text>
    </section>
    <section class="aside" @click="jumpDetails">
      <image src="https://img04.allinmd.cn/activity/20170830/1503993373800.jpg"></image>
      <text class="follow">已支持</text>
      <p>会场：脊柱脊柱脊柱分会名</p>
      <text>主席：王岩</text>
    </section>


  </section>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    methods:{
      jumpDetails(){
        wx.navigateTo({
          url: '../meetingDeatils/meetingDeatils',
        })
      }

    }
  }
</script>

<style>
  .aside image {
    width:345rpx;
    height:245rpx;
  }
  .aside{
    width:345rpx;
    float:left;
    margin-left:20rpx;
    color:#aaa;
    font-size:28rpx;
    margin-top:20rpx;
    position:relative;
  }
  .follow{
    background: rgba(0, 266, 0, 0.3);
    width: 1.04rem;
    height: 0.4rem;
    text-align: center;
    line-height: 0.4rem;
    font-size: 0.26667rem;
    color: #FFFFFF;
    position: absolute;
    left: 0;
    top: 0;
  }
</style>
