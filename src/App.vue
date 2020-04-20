<template>
  <div id="app">
    <nav id="nav">
      <div class="menu-wrap">
        <input type="checkbox" class="toggler" id="navbar">
        <div class="hamburger"><div></div></div>
        <div class="menu" >
          <div>
            <div>
              <ul >
                <router-link tag="li"  to="/"><a>HOME</a></router-link>
                <router-link tag="li" to="/whoweare"><a >WHO WE ARE</a></router-link>
                 <router-link tag="li" to="/service"><a>SERVICE</a></router-link>
                  <router-link tag="li" to="/works"><a>WORKS</a></router-link>
                   <router-link tag="li" to="/member"><a>MEMBER</a></router-link>
                    <router-link tag="li" to="/contact"><a>CONTACT</a></router-link>
                    <p><small>&copy; 2020 key4d lab.</small></p>
  </ul>

  </div>
  </div>
  </div>
  </div>
    </nav>
    <transition name="base-anim">
    <router-view/>
    </transition>
  </div>
</template>
<script>

import Vue from 'vue'
import VueKinesis from 'vue-kinesis'


export default{
  watch: {
  $route(to) {
　　  const menuipt = document.getElementById('navbar');
　　        menuipt.checked = false;

  }
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
    animation: going .2s;
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
// アクティブリンク
.router-link-exact-active{
  color:$font-color !important;
}
/*menu-styles */
.menu-wrap{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
}
.menu-wrap .toggler{
  position: absolute;
  top: 0;
  left: 0;
  z-index:10001;
  cursor: pointer;
  width: 50px;
  height: 50px;
  opacity: 0;
}
.menu-wrap .hamburger{
  position: absolute;
  top: 0;
  left: 10px;
  z-index: 10000;
  width: 33px;
  height: 42px;
  padding: 1rem;
  background: transparent;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
  transform: skew(50deg, -44deg);
  -webkit-transform: skew(50deg, -44deg);
  -ms-transform:skew(50deg, -44deg);
}

/*Hamburger line */
.menu-wrap .hamburger > div {
  position:relative;
  flex:none;
  width: 100%;
  height: 2px;
  background: #383736;
  display:flex;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
  transition : all 0.8s ease;
}
/* Top and bottom line*/
.menu-wrap .hamburger > div::before,
.menu-wrap .hamburger > div::after {
  content: "";
  position: absolute;
  z-index: 10000;
  top:-10px;
  width: 100%;
  height: 2px;
  background: inherit;
}
/*Moves line down */
.menu-wrap .hamburger > div::after{
  top: 10px;
}

/*Toggler animate */
.menu-wrap .toggler:checked + .hamburger > div{
transform: rotate(135deg);
}
/*Turn lines into x */
.menu-wrap .toggler:checked + .hamburger > div:before,
.menu-wrap .toggler:checked + .hamburger > div:after{
  top:0;
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}
/*Rotate on hover when checked */
.menu-wrap .toggler:checked:hover + .hamburger > div {
  -webkit-transform: rotate(225deg);
  -ms-transform: rotate(225deg);
  transform: rotate(225deg);
}
/*Show menu*/
.menu-wrap .toggler:checked ~ .menu{
  visibility: visible;
}
.menu-wrap .toggler:checked ~ .menu > div{
  -webkit-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
  -webkit-transition-duration: var(--menu-speed);
  -o-transition-duration: var(--menu-speed);
  transition-duration: var(--menu-speed);
}
.menu-wrap .toggler:checked ~ .menu > div >div {
  opacity: 1;
  -webkit-transition: opacity 0.2s ease-in-out 0.4s;
  -o-transition: opacity 0.2s ease-in-out 0.4s;
  transition: opacity 0.2s ease-in-out 0.4s;
}
.menu-wrap .menu{
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  overflow: hidden !important;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
}

.menu-wrap .menu > div{
  background-image:url("assets/main-bg.png");
  background-size: cover;
  background-position: no-repeat;
  border-radius:50%;
  width: 200vw;
  height: 200vw;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  flex: none;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0) ;
  -webkit-transition: all 0.8s ease ;
  -o-transition: all 0.8s ease ;
  transition: all 0.8s ease ;
}
.menu-wrap .menu > div:before{
  content: '';
  background: inherit;/*.bgImageで設定した背景画像を継承する*/

  position: absolute;
  /*ブラー効果で画像の端がボヤけた分だけ位置を調整*/

  z-index: -1;/*重なり順序を一番下にしておく*/
}
.menu-wrap .menu > div > div {
  text-align: center;
  max-width:90vw;
  max-height: 100vw;
  opacity: 0;
  -webkit-transition: opacity 0.8s ease;
  -o-transition: opacity 0.8s ease;
  transition: opacity 0.8s ease;
}
.menu-wrap .menu > div > div > ul >li {
list-style: none;
color: #d8d7cd;
font-size: 2rem;
padding: 1rem;
}
.menu-wrap .menu > div > div>ul >li > a {
color: inherit;
text-decoration: none;
-webkit-transition: color 0.8s ease;
-o-transition: color 0.8s ease;
transition: color 0.8s ease;
}

.menu-wrap .menu > div > div> ul >li > a:hover{
color: #483688;
}
</style>
