<script>

</script>
<template>

  <div class="head">
    <nav class="nav">
      <div class="logo" style="font-family: kaiti;"></div>
      <ul class="nav-list">
        <li class="nav-item"><a href="#" class="active">首页</a></li>
        <li class="nav-item"><a href="#">导览</a></li>
        <li class="nav-item"><a href="#">教育</a></li>
        <li class="nav-item"><a href="#">文创</a></li>
        <li class="nav-item"><a href="#">学术研究</a></li>
        <li class="nav-item"><a href="#">活动</a></li>
      </ul>
      <!-- <p class="extra area">
        <span>登录</span>
        <span> | </span>
        <span>注册</span>
        <span> | </span>
        <span>留言</span>
        <span> | </span>
        <span>菜单</span>
        <span> | </span>
        <span>搜索</span>
      </p> -->
    </nav>
    </div>
  
</template>

<style scoped>

 .nav ul {
    margin-left: 80px;
    margin-right: 80px;
  }
  .nav-list {
    gap: var(--spacing-lg);
  }
.extra {
  margin-left: auto;
  font-size: 16px;
}
.head {
  height: 60px;
  padding: 20px;
  position: fixed; /* 吸顶核心 */
  position: -webkit-sticky; /* 兼容Safari */
  overflow: hidden;
  font-family: 'Microsoft Yahei', 'PingFang SC', Arial, sans-serif;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  left: 0;
  top: 0;
  right: 0;
  z-index: 999; /* 保证导航在最上层 */
  transition: background-color 0.3s ease; /* 平滑过渡 */
  
}
.nav ul{
  display: flex;
  margin-left: 200px;
  white-space: nowrap;
  justify-content: space-around;
 flex-wrap: nowrap;
 gap: 60px;
}
.nav ul li{
  display: inline-block;
  list-style: none;
  height: 30px;
  
}
.nav {
  display: flex;
  align-items: center;
  height: 100%;
}
.logo {
  display: inline-block;
  width: 200px;
  height: 40px;
  cursor: pointer;
  background-image: url('../assets/images/logo_white.png');
  background-repeat: no-repeat;
  background-size: contain;
  flex-grow: 0;
  min-width: 200px;
}
.nav, .main, .footer {
  margin: 0 auto;
  padding: 0 ;
}
:root {
  /* 核心配色：一处修改，全局生效 */
  --gugong-red: #C40000;    /* 故宫朱红（主色） */
  --gugong-yellow: #FFD700; /* 故宫明黄（点缀色） */
  --gugong-gray: #B0BEC5;   /* 故宫青灰（辅助色） */
  --gugong-black: rgba(247, 233, 233, 0.87);  /* （文字主色） */
  --gugong-white: #FFFFFF;  /* 白色（背景色） */
  --gugong-bg: #F5F5F5;     /* 浅灰背景（页面底色） */

  /* 通用间距/圆角：统一布局节奏 */
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 48px;
  --radius-sm: 4px;
  --radius-md: 8px;

  /* 常用阴影效果 */
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.nav-list {
  display: flex;
  gap: var(--spacing-xl); /* 菜单项间距 */
}
.nav-item a {
  color: var(--gugong-black);
  text-decoration: none;
  font-size: 16px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease; /* 平滑hover效果 */
}
.nav-item a:hover {
  color:  #C40000;
  border-bottom: 2px solid  #C40000;
  font-size: large;
  transition:  0.3s ;
}
.xuexian-main {
  margin-top: 70px; /* 避开固定导航栏，防止内容被遮挡 */
  padding-bottom: var(--spacing-xl);
}
</style>