<template>
  <section class="footer">
    <button @click="jumpMyprize">
      {{text}}
    </button>
  </section>
</template>

<script>
  export default {
    props: ['text'],
    methods:{
      jumpMyprize(){
        console.log(111);
//        wx.navigateTo({
//          url: 'pages/myPrizenum/myPrizenum',
//        })
      }
    }
  }
</script>

<style>
  .footer{
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
  }
  .footer button{
    border:0px solid #f00;
  }
</style>
