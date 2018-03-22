<template>
  <section>
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
        }
      }
    },
    components:{
      pubilcFooter
    }
  }
</script>

<style>

</style>
