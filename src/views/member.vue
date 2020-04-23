<template>
  <div class="member page">
    <div class="container">
      <div class="main container">
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
          <h2>NYAHON/にゃほん</h2>
          <p>デザイン・コーディング、イラスト製作、3Dモデリング、アプリケーション開発、ブランド戦略、マーケティング</p>
          <h2>TAQUU/たくぅ</h2>
          <p>デザイン・コーディング、アニメーション製作、アプリケーション開発、UI/UXコンサルティング、ブランド戦略、マーケティング</p>
        </div>
        <div class="images">
          <img src="../assets/birds-woman4.png" alt="" class="bird_woman">
      </div>
    </div>
  </div>
</div>
</template>


<style lang="scss" scoped>

.container{
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
margin:10em 4em 10em 4em;
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
  margin:8em 0;

 .bird_woman{
   width:auto;
   height:80%;
   position:relative;
   margin:-2em 5em -2em -12em;
 }
}

</style>
