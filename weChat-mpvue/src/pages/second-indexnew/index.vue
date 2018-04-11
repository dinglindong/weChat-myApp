<template>
  <section class="coainter">
    <button @click="first">5月10敬请期待</button>
    <button @click="second">5月11敬请期待</button>
    <button @click="three">5月12敬请期待</button>
    <button @click="four">5月13敬请期待</button>
  </section>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    methods:{
      first(){
        wx.navigateTo({
          url: '../second-indexv1/second-indexv1',
        })
      },
      second(){
        wx.navigateTo({
          url: '../second-indexv2/second-indexv2',
        })
      },
      three(){
        wx.navigateTo({
          url: '../second-indexv3/second-indexv3',
        })
      },
      four(){
        wx.navigateTo({
          url: '../second-indexv4/second-indexv4',
        })
      }
    }
  }
</script>

<style>

</style>
