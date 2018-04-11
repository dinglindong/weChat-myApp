<template>
  <section class="coainter">
    <button @click="details(dataList1.id)">{{dataList1.name}}</button>
    <button @click="details(dataList2.id)">{{dataList2.name}}</button>
    <button @click="details(dataList1.id)">{{dataList1.name}}</button>
    <button @click="details(dataList2.id)">{{dataList2.name}}</button>
    <button @click="details(dataList1.id)">{{dataList1.name}}</button>
    <button @click="details(dataList2.id)">{{dataList2.name}}</button>
  </section>
</template>

<script>
  export default {
    data(){
      return {
        dataList1:{},
        dataList2:{}
      }
    },
    mounted(){
      this.list();
    },
    methods:{
      list(){
        let t = this;
        wx.request({
          url: 'https://wx.jfoto.cn/api/gallery/740697',
          success:function(res){
            t.dataList1 = res.data;
          }
        });
        wx.request({
          url: 'https://wx.jfoto.cn/api/gallery/740740',
          success:function(res){
            t.dataList2 = res.data;
          }
        });
      },
      details(id,){
        wx.navigateTo({
          url: "../second-indexDetails/second-indexDetails?gallery="+id+"",
        })
      }
    }
  }
</script>

<style>

</style>
