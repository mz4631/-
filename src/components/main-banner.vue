<template>
   <section class="banner" >
  <div class="block text-center">
    <span class="demonstration">
    </span>
    <el-carousel >
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" >
          {{ item }}
        </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
        <h1>学生在线图片</h1>
        <p>文本</p>
      </section>
</template>
<style scoped>

/*首页Banner：主视觉区域  */
.banner {
  margin: 0;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("../assets/images/临时bgi.jpg") center/cover no-repeat;
  color: var(--gugong-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: var(--spacing-xl);
  position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 800px; ;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1); 
}
.banner h1 {
  font-size: 36px;
  margin-bottom: var(--spacing-md);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.banner p {
  font-size: 18px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.demonstration {
  color: var(--el-text-color-secondary);
  width: 100%;
  height: 400px;
}
.el-carousel__item h3 {
  color: #ffffff;
  opacity: 0;
  line-height: 800px;
  margin: 0;
  text-align: center;
  width: 100%;
  height: 100%;
  display: block;
}
.el-carousel__container {
  width: 100%;
  height: 100%;}
.el-carousel {
  margin: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  overflow: hidden;
  z-index: 1; /* 确保轮播图在 Banner 背景之上 */
}

:deep(.el-carousel__container) {
  width: 100% !important;
  height: 100% !important;
}
:deep(.el-carousel__item) {
  width: 100% !important;
  height: 100% !important;
  background-color: #000; /* 兜底背景色，防止图片加载失败时透明 */
}
.el-carousel__item:nth-child(2n) {
  background: #99a9bf url("../assets/images/临时bgi.jpg") center/cover no-repeat !important;
}
.el-carousel__item:nth-child(2n + 1) {
  background: #d3dce6 url("../assets/images/临时bgi2.jpg") center/cover no-repeat !important;
}
.block text-center{
  width: 100%;
  height: 100%;
}
.small justify-center{
  font-size: 48px;
  line-height: 800px;
  width: 100%;
  height: 100%;
}
</style>
<script>    

</script>