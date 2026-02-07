<script>

</script>
<template>
<div class="box-home-final">
<p class="p1">
    <img src="../assets/images/final-innerphoto1.png" alt="">
    文字
</p>
<p class="p2">
    <img src="../assets/images/final-innerphoto2.png" alt="">
    文字
</p>
<p class="p3">
    <img src="../assets/images/final-innerphoto3.png" alt="">
    文字
</p>
<p class="p4">
    <img src="../assets/images/final-innerphoto4.png" alt="">
    文字
</p>
<p class="p5">
    <img src="../assets/images/final-innerphoto5.png" alt="">
    文字
</p>

</div>
</template>
<style scoped>
.box-home-final{
    width:100% ;
    height: 325px;
    padding: 20px;
    padding-left: 30px;
    display: flex;

}
.box-home-final img{
    width: 32%;
    height: 40%;
    
}
p{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: aliceblue;
    background-repeat: no-repeat;
    background-size: cover;
}

.p1{
    background-image:url(../assets/images/final-photo1.jpg);
}
.p2{
    background-image:url(../assets/images/fina-photo2.jpg);
}
.p3{
    background-image:url(../assets/images/final-photo3.jpg);
}
.p4{
    background-image:url(../assets/images/final-photo4.jpg);
}
.p5{
    background-image:url(../assets/images/final-photo5.jpg);
}


</style>