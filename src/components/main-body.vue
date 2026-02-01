<template>
  <div class="body">
   
    </div>
    <div class="news">
        <div class="left-news">
           <div class="zixun">
            <ul>
                <li>这是一句话</li>
                <li>这是一句话</li>
                <li>这是一句话</li>
                <li>这是一句话</li>
                <li>这是一句话</li>
                <li>这是一句话</li>
                <li>这是一句话</li>
                <li>这是一句话</li>
                <li>这是一句话</li>
            </ul>
           </div>
           <div class="under-zixun">
                <img src="../assets/images/underZixun.jpg" alt="">
           </div>
        </div>
        <div class="right-news">
            <div class="top-gonggao">
            </div>
           <div class="gonggao">
            <div class="title">
                <img src="../assets/images/public-icon1.png" alt="" style="width: 20px; height: 32px;">
                <span>公告</span>
                <img src="../assets/images/public-icon2.png" alt="" style="width: 20px; height: 32px;">
            </div>
            <ul >
                <li>
                    <a href="#">
                    关于2026年教师和本科院校、专科院校学生主题免费开放日的公告
                    </a>
                    <p class="time">
                        2026-01-15
                    </p>
                </li>
                <li>
                    <a href="#">
                    故宫博物院2026年寒假期间 未成年人团队快速预约、检票措施
                    </a>
                    <p class="time">
                        2026-01-10
                    </p>
                </li>
                <li>
                    <a href="#">
                    关于2026年春节期间故宫博物院开放时间的公告
                    </a>
                    <p class="time">
                        2026-01-05
                    </p>
                </li>
                <li>
                    <a href="#">
                    关于养心殿重新开放的公告
                    </a>
                    <p class="time">
                        2025-12-28
                    </p>
                </li>
                <li>
                    <a href="#">
                    关于2026年故宫博物院年票发售的公告
                    </a>
                    <p class="time">
                        2025-12-20
                    </p>
                </li>
                <li>
                    <a href="#">
                    关于2025年医务人员和志愿者主题免费开放日的公告
                    </a>
                    <p class="time">
                        2025-12-15
                    </p>
                </li>
                <li>
                    <a href="#">
                    关于2025年公安民警主题免费开放日的公告
                    </a>
                    <p class="time">
                        2025-12-10
                    </p>
                </li>
                <li>
                    <a href="#">
                    关于太极殿原状陈列展厅临时关闭的公告
                    </a>
                    <p class="time">
                        2025-12-05
                    </p>
                </li>

            </ul>     
           </div>
           
        </div>
    </div>
</template>
<script>

</script>
<style scoped> 
.news{
    width: 100%;
    height: auto;
    margin-top: 20px;
    display: flex;
    padding-left: 30px;
    padding-right: 20px;
    box-sizing: border-box;
    flex-shrink: none;
    flex-grow: none;
    flex-basis: auto;
    overflow: hidden;
}
.zixun, .gonggao{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    padding: 30px;
    padding-left: 40px;
}
.left-news{
    width: 60%;
    padding: 0 10px;
    height: auto;
    box-sizing: border-box;
    
}
.zixun ul li, .gonggao ul li{
    list-style: none;
    color: aliceblue;
    font-size: 14px;
    padding: 7px;
    margin: 6px;
    font-family: 'Microsoft Yahei', 'PingFang SC', Arial, sans-serif;
    font-weight: normal;
    display: flex;
    flex: none;
}
 .gonggao ul li p:last-child{
    margin-left: auto;
}

.zixun ul li a, .gonggao ul li a{
    text-decoration: none;
    color: white;
    font-weight: normal;
    font-family: 'Microsoft Yahei', 'PingFang SC', Arial, sans-serif;
}
.zixun ul li::before, .gonggao ul li::before{
    content: "• ";
    color: #ffffff; /* 小圆点颜色 */
    font-weight: bold;
    display: inline-block;
    width: 1em; /* 小圆点与文字的距离 */
    margin-left: -1em; /* 调整小圆点位置 */
}
.zixun {
    background-image: url(../assets/images/home_block1_news_bg.jpg);
    background-repeat: repeat;
    height: 500px;
    margin-bottom: 20px;
}
.gonggao ul{
    margin-top: 20px;
}
.gonggao {
    background-image: url(../assets/images/png8.png);  
    background-repeat: no-repeat;
    background-size: cover;
    
}

.right-news{
    width: 40%;
    padding: 0 20px;
    height: auto;
    box-sizing: border-box;
}
.title{
    color: white;
    height: 48px;
    display: flex;
    align-items: center;
    font-size: 28px;
    font-weight: normal;
}
.title span{
    margin: 10px;
}
time{
    font-size: 12px;
    color: #bbbbbb;
}
.under-zixun img{
    width: 100%;
    height: auto;
    margin-top: 10px;
    margin-bottom: 20px;
}

.top-gonggao{
    width: 100%;
    height: 520px;
    background-image: url(../assets/images/png6.png);
    background-repeat: repeat;
    margin-bottom: 30px;
}
</style>