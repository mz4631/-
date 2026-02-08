<template>
<div class="underbody">
<div class="left-under-mianbody">
    <div class="title">
        <img src="../assets/images/public-icon1.png" alt="">
        <h2>文字</h2>
        <img src="../assets/images/public-icon2.png" alt="">
    </div>
    <img class="left-img-1" src="../assets/images/home_line.png" alt="">
    <img class="left-img-2" src="../assets/images/home_line.png" alt="">
    <div class="under-title" style="display: flex;">
    <h1 style="font-size: 58px; color: aliceblue; font-weight: 300;"> 1949,10,01</h1>
    <p style="width: 58px;height: 58px;">
        <img src="../assets/images/indexicon1.png" alt="">
    </p>
    </div>
    <div class="under-under" style="display: flex; justify-content: center;align-items: center;">
        <div style="color: aliceblue;font-weight: 300; margin-bottom: 5px;">请输入文字</div>
        <div style="position: absolute;">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="140" height="40" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); top: 0px;"><desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></desc><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs><path fill="none" stroke="#ffffff" d="M0,5L5,5L5,0L135,0L135,5L140,5L140,35L135,35L135,40L5,40L5,35L0,35L0,5" stroke-width="2" stroke-dasharray="1000,1000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-width: 2;"></path></svg>
        </div>
    </div>
</div>
<div class="right-under-mainbody">
    <div class="right">
        <img src="../assets/images/right-1.jpg" alt="">
</div>
    <div class="right">
        <img src="../assets/images/right-2.jpg" alt="">
    </div>
    <div class="right">
        <img src="../assets/images/right-3.jpg" alt="">
    </div>
</div>
</div>
</template>
<script>

</script>
<style scoped>
.underbody{
    width: 100%;
    height: 460px;
    display: flex;
    align-items: center;
    padding-left:30px;
    margin-bottom: 30px;

}
.left-under-mianbody{
    width: 400px;
    height: 100%;
    margin-right: 60px;
    background-image: url(../assets/images/home_block2_box_bg1920.jpg);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.right-under-mainbody{
    width: 1170px;
    height: 100%;
    display: flex;
    min-width:1170px;
}
.right{
    width: 33.33%;
    height: 100%;
}
.right img{
    width: 100%;
    height: 100%;
}
.title{
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.title h2{
    height:28px ;
    width: 56px;
    color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    margin: 10px;
}
.title img{
    height:32px ;
    width:22px;}
.under-title p{
    background-image: url(../assets/images/jian.png);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

}
.left-img-1{
    margin-top: 10px;
}
.left-img-2{
    margin-bottom: 40px;
}
.under-under{
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>