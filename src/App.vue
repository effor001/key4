<template>
  <div id="app">
    <nav id="nav" class="nav">
      <div class="menu-wrap">
        <input type="checkbox" class="toggler" id="navbar">
        <div class="hamburger"><div></div></div>
        <div class="menu">
          <div>
            <div>
              <ul>
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
    <custom-cursor
    :targets="['toggler', 'a', 'button']"
    :circleColor="'purple'"
    :circleColorHover="'lightblue'"
    :hoverSize="2"
  ></custom-cursor>
    <div class="side-l">
      <div class="sns_icons">
        <font-awesome-icon :icon="['fas', 'chevron-right']" size="2x"  />
        <a href="https://twitter.com/AR_OL_chan">
        <font-awesome-icon :icon="['fab', 'twitter']" size="2x" class="fa-1" /></a>
        <a href="#">
        <font-awesome-icon :icon="['fab', 'instagram']" size="2x" class="fa-2"/></a>
        <font-awesome-icon :icon="['fas', 'chevron-right']" size="2x" class="fa-0" />
      </div>
      <div class="copy">&copy 2020 Key4d lab. all rights reserved.</div>
      </div>
    <div class="side-menu">
      <ul>
        <router-link tag="li" to="/"><a>HOME</a></router-link>
        <router-link tag="li" to="/whoweare"><a >WHO WE ARE</a></router-link>
        <router-link tag="li" to="/service"><a>SERVICE</a></router-link>
        <router-link tag="li" to="/works"><a>WORKS</a></router-link>
        <router-link tag="li" to="/member"><a>MEMBER</a></router-link>
        <router-link tag="li" to="/contact"><a>CONTACT</a></router-link>
      </ul>
    </div>
    <transition name="base-anim">
    <router-view/>
    </transition>
  </div>

</template>

<script>
import Vue from 'vue'
import VueKinesis from 'vue-kinesis'
import CustomCursor from '@/components/CustomCursor'
export default{
  components:{
   CustomCursor
 },
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
    background:#86847a;
    font-family:$main-font;
    color:$font-color;
    background-image:url("assets/digital_kairo2.svg");
    background-repeat:repeat;
    background-color:rgba(255,255,255,0.8);
    background-blend-mode:lighten;
    background-size:cover;
    overflow:hidden;
  }

  p{
    font-size:1.25rem;
    line-height: 2.4;
  }
  h1{
    font-size:1rem;
  }
  h2{
    font-size:2rem;
  }
  a{
    text-decoration:none;
    color:$font-color;
    &:hover{
      color:$hover-color;
    }
  }

  #app{
    background: none;
  }

  .page{
  width: $width-wrap;
   overflow-x:hidden;
   position:absolute;
   left:0;
   right:0;
   top:0;
   bottom:0;
  }

  .base-anim-enter-active{
    animation: coming 1s;
    animation-delay: .5s;
    opacity: 0;
  }
  .base-anim-leave-active{
    animation: going .8s;
  }

  @keyframes going{
    from{
      transform: translateX(0);
    }
    to{
      transform: translateX(500px);
      opacity:0;
    }
  }

  @keyframes coming{
    from{
      transform: translateX(-500px);
      opacity: 0;
    }
    to{
      transform: translateX(0px);
      opacity: 1;
    }
}
// コンテンツエリア
  .side-l{
    width: $side-wrap-l;
    writing-mode: vertical-lr;
    left:0;
  }
  .side-menu{
    display:flex;
    position:fixed;
    width:$side-wrap-r - 5%;
    height:100vh;
    top:0;
    right:0;
    background-color:$font-color;
    white-space: nowrap;
    writing-mode:vertical-lr;
    z-index:999;
      &_ul,li{
      display:inline;
      list-style:none;
      margin:2%;
      }
      .router-link-active{
        display:inline-block;

      }
  }
  .side-menu a{
    color:#d8d7cd;
    &:hover{
      color:$hover-color;
    }
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
 // サイド

// コピーライト
 .copy{
   writing-mode:vertical-lr;
   bottom:5%;
   position:fixed;
   margin-left:2%;
   font-size:0.8rem;
}
// SNS icons
.sns_icons{
  display:flex;
  justify-content:space-around;
  position:fixed;
  font-size: 1rem;
  color:$font-color;
  margin:10% 0 0 2%;
  z-index:998;

 .fa-twitter{
  margin-bottom:1em;
}
.fa-chevron-right{
  transform:rotate(90deg);
  margin-bottom:1em;
  margin-left:0.2em;
}
 .fa-0{
   transform:rotate(-90deg);
   margin-top:1em;
}
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
  top: 15px;
  left: 15px;
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

// 建設中
.more_to_come{
  font-family: DINK,sans-serif;
  font-size: 5rem;
  transform: rotate(20deg);
  transform-origin:bottom;
  &::before{
    content:"MORE to come! ";
    width:200%;
    height:100%;
    position:relative;
    border-style: solid;
  }
}
</style>
