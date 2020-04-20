<template>
  <div id="app">
    <theNavigation/>
    <transition name="base-anim">
    <router-view/>
    </transition>
  </div>
</template>
<script>

import Vue from 'vue'
import VueKinesis from 'vue-kinesis'
import theNavigation from "@/components/theNavigation"

export default{
  components: {
    theNavigation
  }
}


Vue.use(VueKinesis)




</script>
<style lang="scss">

// 全体設定

  body{
    background:white;
    font-family:$main-font;
    color:$font-color;
    background-image:url("assets/digital_kairo2.svg");
    background-color:rgba(255,255,255,0.8);
    background-blend-mode:lighten;
    background-size:cover;
    background-repeat:no-repeat;
    overflow:hidden;
  }
  html, body {
    height: calc(100% - 50px);
  }
  p{
    font-size:1.25rem;
    line-height: 2.4;
  }


  #app{
    background: #fff;
    width: 50%;
    padding:5px;
    border-radius: 10px;
    height: calc(60% -50px);
  }

  .page{
    position: fixed;
    width: $width-wrap;
  }

  .base-anim-enter-active{
    animation: coming 1s;
    animation-delay: .5s;
    opacity: 0;
  }
  .base-anim-leave-active{
    animation: going 1s;
  }

  @keyframes going{
    from{
      transform: translateX(0);
    }
    to{
      transform: translateX(-50px);
      opacity:0;
    }
  }

  @keyframes coming{
    from{
      transform: translateX(-50px);
      opacity: 0;
    }
    to{
      transform: translateX(0px);
      opacity: 1;
    }
}
// コンテンツエリア
  .main{
    width: $main-wrap;
  }
  .side{
    width: $side-wrap;
    writing-mode: vertical-lr;
  }
// ボタン
  .btn{
    display: inline-block;
    width:300px;
    max-width: 100%;
    padding:20px 10px;
    background-color: #fff;
    border:2px solid #383736;
    color:$font-color;
    text-align:center;
    text-decoration:none;
    transition:.25s;

   &:focus,&:hover{
     background-color: #fff;
     border-color:$font-color;
     color:$hover-color;
   }
 }
// コピーライト
 .copy{
   writing-mode:vertical-lr;
   margin-top:10em;
   position:fixed;

}
</style>
