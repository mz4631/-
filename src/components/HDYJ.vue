<script>

</script>
<template>
<div class="box">
            <div class="gonggao">
                <div class="title">
                    <img src="../assets/images/public-icon1.png" alt="" style="width: 20px; height: 32px;">
                    <span>博物馆活动</span>
                    <img src="../assets/images/public-icon2.png" alt="" style="width: 20px; height: 32px;">
                </div>
                <ul>
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



                </ul>
            </div>
                        <div class="gonggao-2">
                <div class="title">
                    <img src="../assets/images/public-icon1.png" alt="" style="width: 20px; height: 32px;">
                    <span>学术研究</span>
                    <img src="../assets/images/public-icon2.png" alt="" style="width: 20px; height: 32px;">
                </div>
                <ul>
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


                </ul>
            </div>
            <div class="books">
                <p class="p1"></p>
                <p class="p2"></p>
                <p class="p3"></p>

            </div>
</div>
</template>
<style scoped>
div ul li a:hover{
    color: rgba(252, 255, 159, 0.9);
}
.books {
    width: 30%;
    height: 360px;
    margin-right: 30px;
    display: flex;
    padding-bottom: 10px;
    min-width: 470px;
}
.books P{
    width: 33.33%;
    height: 100%;
}
.books .p1{
    background-image: url(../assets/images/png6.png);
    
}
.books .p2{
    background-image: url(../assets/images/png6.png);
}
.books .p3{
    background-image: url(../assets/images/png6.png);
}
.box{
    height: 360px;
    width: 100%;
    display: flex;
    gap: 30px;
    padding-left: 30px;
}
.gonggao {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    padding: 20px;
    padding-left: 40px;
    width: 35%;
    min-width: 550px;
}
.gonggao-2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    padding: 20px;
    padding-left: 40px;
    width: 35%;
     min-width: 550px;
}

.gonggao ul li {
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
.gonggao-2 ul li {
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
.gonggao ul li p:last-child {
    margin-left: auto;
}
.gonggao-2 ul li p:last-child {
    margin-left: auto;
}
.gonggao ul li a {
    text-decoration: none;
    color: white;
    font-weight: normal;
    font-family: 'Microsoft Yahei', 'PingFang SC', Arial, sans-serif;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.gonggao-2 ul li a {
    text-decoration: none;
    color: white;
    font-weight: normal;
    font-family: 'Microsoft Yahei', 'PingFang SC', Arial, sans-serif;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.gonggao ul li::before {
    content: "• ";
    color: #ffffff;
    /* 小圆点颜色 */
    display: inline-block;
    width: 1em;
    /* 小圆点与文字的距离 */
    margin-left: -1em;
    /* 调整小圆点位置 */
}
.gonggao-2 ul li::before {
    content: "• ";
    color: #ffffff;
    /* 小圆点颜色 */
    display: inline-block;
    width: 1em;
    /* 小圆点与文字的距离 */
    margin-left: -1em;
    /* 调整小圆点位置 */
}
.gonggao ul {
    margin-top: 20px;
}
.gonggao-2 ul {
    margin-top: 20px;
}

.gonggao {
    background-image: url(../assets/images/png6.png);

}
.gonggao-2 {
    background-image: url(../assets/images/home_block1_news_bg.jpg);

}
.title {
    color: white;
    height: 48px;
    display: flex;
    align-items: center;
    font-size: 28px;
    font-weight: normal;
}
.title span {
    margin: 10px;
}

time {
    font-size: 12px;
    color: #bbbbbb;
}


</style>