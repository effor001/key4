<template>
  <div class="member page">
    <div class="main container">
      <div class="member_top">
        <div class="para">
          <div class="hover">
            <img src="@/assets/hover_us.svg" alt="">
          </div>
          <kinesis-container>
            <kinesis-element :strength="10"  type="depth" >
            <img src="../assets/bird_5.svg" alt="" class="birds">
             </kinesis-element>
           </kinesis-container>
          <img src="../assets/member_1.svg" alt="" class="title">
          <h1>メンバー紹介</h1>
            <p>Key4d lab.はメンバーそれぞれの強みを生かしたクリエーションを提供します。</p>
        </div>
        <div class="images">
          <img src="../assets/birds-woman4.png" alt="" class="bird_woman">
      </div>
    </div>
    <div class="introduction">
      <h2>Key4d lab.のメンバー</h2>
      <h3>NYAHON/にゃほん</h3>
      <p>デザイン・コーディング、イラスト製作、3Dモデリング、アプリケーション開発、ブランド戦略、マーケティング</p>
      <a href="https://twitter.com/AR_OL_chan">
      <font-awesome-icon :icon="['fab', 'twitter']" size="2x" class="fa-1" /></a>
      <a href="#">
      <font-awesome-icon :icon="['fab', 'instagram']" size="2x" class="fa-2"/></a>
      <h3>TAQUU/たくぅ</h3>
      <p>デザイン・コーディング、アニメーション製作、アプリケーション開発、UI/UXコンサルティング、ブランド戦略、マーケティング</p>
      <a href="https://twitter.com/AR_OL_chan">
      <font-awesome-icon :icon="['fab', 'twitter']" size="2x" class="fa-1" /></a>
      <a href="#">
      <font-awesome-icon :icon="['fab', 'instagram']" size="2x" class="fa-2"/></a>
    </div>
</div>
</div>
</template>


<style lang="scss" scoped>
.container{
  width:$width-wrap;
}
.member_top{
display:flex;
flex-direction:row;

}
.hover{
  position:relative;
  width:6em;
  top: -4em;
}
.para{
width:50%;
justify-content:center;
text-align:justify;
margin:10em 4em 0em 5em;
.birds{
  width:12em;
  position:relative;
  top:-3em;
  left:4em;
}
 .title{
  width:20em;
  height:auto;
  margin: -2em auto 1em auto;
  }
 p{
   display: -webkit-box;
     display: -ms-flexbox;
     display: flex;
     -webkit-box-pack: justify;
     -ms-flex-pack: justify;
     justify-content: space-between;
 }
}

.images{
  display: flex;
  width:50%;
  margin:8em 0 0 0;

 .bird_woman{
   width:auto;
   height:80%;
   position:relative;
   margin:-2em 5em -2em -12em;
 }
}

.introduction{
  margin-left:4em;
}
.fa-1{
  float:left;
}
</style>
