<template>
  <div class="member page">
    <div class="container">
      <div class="header">
        <div class="images">
          <img src="../assets/turntable-key4x.png" alt="" class="turntable">
        </div>
        <div class="para">
          <div class="hover">
            <img src="@/assets/hover_us.svg" alt="">
          </div>
          <div class="para">
            <kinesis-container>
              <kinesis-element :strength="10"  type="depth" >
                <img src="../assets/bird_5.svg" alt="" class="birds">
              </kinesis-element>
            </kinesis-container>
            <h1><img src="../assets/member_1.svg" alt="" class="title"></h1>
            <p>Key4d lab.はメンバーそれぞれの強みを生かしたクリエーションを提供します。</p>
          </div>
        </div>
    </div>
    <div class="introduction">
        <div class="member_module">
          <h2>NYAHON/にゃほん</h2>
          <div class="inner_module">
            <p class="intro_para">デザイン・コーディング、イラスト製作、3Dモデリング、アプリケーション開発、ブランド戦略、マーケティング</p>
            <img src="@/assets/nyahon2.png" alt="" class="nyahon">
            </div>
          <div class="sns">
            <a href="https://twitter.com/AR_OL_chan">
              <font-awesome-icon :icon="['fab', 'twitter']" size="2x" class="fa-1" /></a>
            <a href="#">
              <font-awesome-icon :icon="['fab', 'instagram']" size="2x" class="fa-2"/></a>
          </div>
        </div>
        <div class="member_module">
          <h2>TAQUU/たくぅ</h2>
          <div class="inner_module">
          <img src="@/assets/taquu2.png" alt="" class="nyahon">
          <p >デザイン・コーディング、アニメーション製作、アプリケーション開発、UI/UXコンサルティング、ブランド戦略、マーケティング</p>
          </div>
          <div class="sns">
            <a href="https://twitter.com/AR_OL_chan">
            <font-awesome-icon :icon="['fab', 'twitter']" size="2x" class="fa-1" /></a>
            <a href="#">
            <font-awesome-icon :icon="['fab', 'instagram']" size="2x" class="fa-2"/></a>
        </div>
        </div>
    </div>
</div>
</div>
</template>


<style lang="scss" scoped>

.member {
    width: $width-wrap;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
}
.container{
  background-color: blue;
  width:$main-wrap;
  margin:5% 0 0 10% ;
}
.header{
  background-color: purple;
  display:flex;
  flex-direction:row;
  justify-content: space-between;
}
.hover{
  position:relative;
  width:6em;
  top: 5%;
  left:20%;
}
.para{
  width:50%;
  background-color: red;
  display:block;
  text-align:justify;
  margin:4em auto;
  .birds{
  width:12em;
  position:relative;
  }
  .title{
  width:90%;
  height:auto;
  }
  p{
    width:120%;
  }
}

.images{
  display:block;
  margin:0 auto;
  .turntable{
    width:30em;
    display:block;
    position:relative;
    margin:10% auto;
    z-index:1;
  }
}


.member_module{
  background-color: yellow;
  display:flex;
  flex-direction:column;
  align-content:space-between;
  .inner_module{
    flex:1;
    display:flex;
  }
    p{
    margin:auto 1.5%;
    height:10%;
    }
    .nyahon{
      width:50%;
    }
    .sns{
    display:flex;
    flex:1;
    background-color: white;
    justify-content:flex-end;
     .fa-twitter{
       margin-right:1.5rem;
     }
    }
  }


</style>
