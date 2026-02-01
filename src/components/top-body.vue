<template>
     <main class="xuexian-main">
      <p>
        这里是top-body组件的内容，可以根据需要进行修改和扩展。
      </p>
      <a  class="xuexian-link" href="#">
        <p>点击查看</p>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="110" height="40" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); top: 0px;"><desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></desc><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs><path fill="none" stroke="#ddd" d="M0,5L5,5L5,0L105,0L105,5L110,5L110,35L105,35L105,40L5,40L5,35L0,35L0,5" stroke-width="2" stroke-dasharray="1000,1000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); stroke-width: 2;"></path></svg>
      </a>
      
      </main>

</template>
<script>

</script>
<style scoped>
    .xuexian-main {
        width: 100%;
        min-height: 150px;
        box-sizing: border-box;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
        font-size: 32px;
        font-weight: 700;
        line-height: 1.5;
        color: #474747;;
    }
    .xuexian-svg {
        display: block;
        cursor: pointer;
    }
    .xuexian-link {
        display: inline-block;
        text-decoration: none;
        margin-top: 20px;
        color: #333;
        position: relative;
        width: 180px;
        height: 40px;
    }
    .xuexian-link p {
        position: absolute;
        top: 50%;
        left: 31%;
        transform: translate(-50%, -50%);
        margin: 0;
        font-size: 14px;
        font-weight: normal;

    }

    
</style>