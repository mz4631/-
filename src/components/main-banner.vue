<template>
  <section class="banner">
    <!-- 自定义轮播容器 -->
    <div class="custom-carousel" ref="carouselRef">
      <div class="carousel-item" v-for="(item, index) in 4" :key="index"
        :class="{ active: currentIndex === index, fading: fadingIndex === index }"
        :style="index === currentIndex ? { opacity: 1 } : index === fadingIndex ? { opacity: 0, transform: 'scale(1.1)' } : { opacity: 0 }">
      </div>

      <!-- 底部切换圆点按钮 -->
      <div class="carousel-dots">
        <button class="carousel-dot" v-for="(item, index) in 4" :key="index" :class="{ active: currentIndex === index }"
          @click="handleDotClick(index)"></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

// 核心响应式数据
const currentIndex = ref(0);       // 当前显示的轮播索引
const fadingIndex = ref(-1);       // 正在扩散消失的轮播索引
const carouselRef = ref(null);     // 轮播容器引用
let timer = null;                  // 自动轮播定时器
const interval = 5000;             // 5秒切换一次
let isHover = ref(false);          // 鼠标悬停状态

// 切换轮播核心逻辑
const triggerCarousel = async (targetIndex) => {
  // 防止动画叠加
  if (fadingIndex.value !== -1 || currentIndex.value === targetIndex) return;

  // 1. 标记旧图开始扩散消失
  fadingIndex.value = currentIndex.value;

  // 2. 先给新图设置初始透明度0.8
  const targetItem = document.querySelectorAll('.carousel-item')[targetIndex];
  if (targetItem) {
    targetItem.style.opacity = '0.8';
    targetItem.style.transform = 'scale(1)';
  }

  // 等待DOM更新
  await nextTick();

  // 3. 延迟触发新图显示（过渡到透明度1）
  setTimeout(() => {
    currentIndex.value = targetIndex;
    // 新图过渡到透明度1
    if (targetItem) {
      targetItem.style.opacity = '1';
    }
  }, 100);

  // 4. 动画结束后重置状态
  setTimeout(() => {
    fadingIndex.value = -1;
    // 重置旧图样式
    const fadingItem = document.querySelectorAll('.carousel-item')[fadingIndex.value];
    if (fadingItem) {
      fadingItem.style.transform = 'scale(1)';
    }
  }, 800);
};

// 自动轮播
const startAutoPlay = () => {
  timer = setInterval(() => {
    const nextIndex = (currentIndex.value + 1) % 4;
    triggerCarousel(nextIndex);
  }, interval);
};

// 暂停轮播
const pausePlay = () => {
  if (timer) clearInterval(timer);
};

// 底部圆点按钮点击事件
const handleDotClick = (index) => {
  triggerCarousel(index);
  // 重置自动轮播计时
  pausePlay();
  startAutoPlay();
};

// 鼠标悬停/离开事件
const handleMouseEnter = () => {
  isHover.value = true;
  pausePlay();
};
const handleMouseLeave = () => {
  isHover.value = false;
  startAutoPlay();
};

// 生命周期：初始化+销毁
onMounted(() => {
  // 启动自动轮播
  startAutoPlay();

  // 绑定悬停事件
  const carousel = carouselRef.value;
  if (carousel) {
    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);
  }

  // 页面切换时暂停/恢复轮播
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) pausePlay();
    else if (!isHover.value) startAutoPlay();
  });
});

onUnmounted(() => {
  // 销毁时清除定时器和事件
  pausePlay();
  const carousel = carouselRef.value;
  if (carousel) {
    carousel.removeEventListener('mouseenter', handleMouseEnter);
    carousel.removeEventListener('mouseleave', handleMouseLeave);
  }
});
</script>

<style scoped>
/* 主Banner容器：保留原有高度和兜底背景 */
.banner {
  width: 100%;
  height: 800px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: transparent;
  /* 保留你原来的背景图作为兜底 */
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../assets/images/临时bgi.jpg") center/cover no-repeat;
}

/* 自定义轮播容器：全屏覆盖 */
.custom-carousel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: auto;
}

/* 轮播项：所有项重叠，从中心缩放 */
.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: #000;
  /* 保留你原来的图片路径 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* 核心：从中心缩放，过渡动画 */
  transform-origin: center center;
  transition:
    opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1),
    transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
  transform: scale(1);
}

/* 轮播项背景图：保留你原来的路径 */
.carousel-item:nth-child(2n) {
  background-image: url("../assets/images/临时bgi.jpg");
}

.carousel-item:nth-child(2n + 1) {
  background-image: url("../assets/images/临时bgi2.jpg");
}

/* 激活态：新图从0.8透明度过渡到1，大小不变 */
.carousel-item.active {
  opacity: 1;
  transform: scale(1);
  z-index: 2;
  transition: 1.2s;
}

/* 淡出态：旧图从中心向外扩散（放大+透明度降低） */
.carousel-item.fading {
  opacity: 0;
  transition: 1.2s;
  transform: scale(1.1);
  /* 放大1.1倍，实现中心向外扩散效果 */
  z-index: 1;
}

/* 底部切换圆点容器 */
.carousel-dots {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
}

/* 底部切换圆点按钮 */
.carousel-dot {
  width: 10px;
  height: 10px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  outline: none;
}

/* 激活态圆点 */
.carousel-dot.active {
  background: #ffffff;
  transform: scale(1.3);
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.6);
}

/* 圆点悬停效果 */
.carousel-dot:hover:not(.active) {
  background: rgba(255, 255, 255, 0.8);
  transform: scale(1.1);
}

/* 响应式适配：小屏幕自动调整 */
@media (max-width: 768px) {
  .banner {
    height: 400px;
  }

  .carousel-dots {
    bottom: 16px;
    gap: 8px;
    padding: 6px 12px;
  }

  .carousel-dot {
    width: 8px;
    height: 8px;
  }
}
</style>