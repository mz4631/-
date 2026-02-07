<script setup>
import { onMounted, onUnmounted } from 'vue'
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
const handleScroll = () => {
  const head = document.querySelector('.head')
  if (window.scrollY > 50) {
    head.style.background = 'rgba(0, 0, 0, 0.8)'
  } else {
    head.style.background = 'rgba(0, 0, 0, 0.5)'
  }
}
import mainHeader from '../components/main-header.vue';
import mainFooter from '../components/main-footer.vue';
import mainBanner from '../components/main-banner.vue';
import mainBody from '../components/main-body.vue';
import topBody from '../components/top-body.vue';
import underMainbody from '../components/under-mainbody.vue'
import UnderMainbody from '../components/under-mainbody.vue'
import HDYJ from '../components/HDYJ.vue'
import homeFinal from '../components/home-final.vue'
</script>


<template>
  <div class="main">
     <main-header  />
  </div>
  <div>
    <main-banner />
  </div>
<div>
      <top-body class="flag" v-observe="'active'"/>
</div>
<div>
      <main-body />
</div>
<div>
    <under-mainbody />
</div>
<div>
  <HDYJ />
</div>
<div>
  <home-final />
</div>
<div>
      <main-footer />
</div>
 

  
 
  
  
</template>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Helvetica Neue", Arial, sans-serif;
}
/* 平板/小屏电脑适配 */
@media (max-width: 1200px) {}
 
/* 移动端适配（可按需完善） */
@media (max-width: 768px) {
  .extra {
    display: none; /* 隐藏登录注册等次要内容 */
  }
  .banner {
    height: 400px; /* 减小移动端banner高度 */
  }
  .banner h1 {
    font-size: 24px;
  }
}
</style>