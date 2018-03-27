<template>
  <section class="coainter">
    <!--滚动图  -->
    <swiper class="banner" :indicator-dots="indicatorDots" :indicator-color="indicatorColor"
              :autoplay="autoplay" :interval="interval" :duration="duration">
      <block v-for="(v,i) in dataList" :key="i">
        <swiper-item>
          <image :src="v" class="slide-image" width="355" height="150"/>
        </swiper-item>
      </block>
    </swiper>
    <p>CAOS2018中西医结合课程</p>
    <p>脊柱创伤是常见病、多发病，胸腰椎骨折对各级医生更是司空见惯，然而，做到正确诊断、合理治疗实属不易，出现并发症后处理更是非常棘手。本课程关注...</p>
    <p>中国医师协会骨科医师分会常务委员</p>
    <p>中国医师协会骨科医师分会脊柱创伤专业委员会主任委员</p>
    <p>中国医师协会骨科医师分会保膝专业委员会</p>
    <p>▣ 主任委员：</p>
    <p>黄野</p>
    <p>▣ 主任委员：</p>
    <p>黄野</p>
    <p>CAOS2018中西医结合课程</p>
    <p>脊柱创伤是常见病、多发病，胸腰椎骨折对各级医生更是司空见惯，然而，做到正确诊断、合理治疗实属不易，出现并发症后处理更是非常棘手。本课程关注...</p>
    <p>中国医师协会骨科医师分会常务委员</p>
    <p>中国医师协会骨科医师分会脊柱创伤专业委员会主任委员</p>
    <p>中国医师协会骨科医师分会保膝专业委员会</p>
    <p>▣ 主任委员：</p>
    <p>黄野</p>
    <p>▣ 主任委员：</p>
    <p>黄野</p>
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
    .coainter{
      overflow: auto;
      width:100%;
    }
    .coainter image{
      width:100%;
    }
</style>
