/**
 * Create By DingLindong on 2018/4/11
 */
import Vue from 'vue'
import App from './index'

const app = new Vue(App);
app.$mount();

export default {
  config: {
    disableScroll:false,
    enablePullDownRefresh:true,
    onReachBottomDistance:50
  }
}
