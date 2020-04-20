<template>
  <div class="member page">
    <div class="container">
      <div class="side">
        <div class="copy">&copy 2020 Key4d lab. all rights reserved.</div>
      </div>
      <div class="main container">
        <div class="para">
          <img src="../assets/bird_5.svg" alt="" class="birds">
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

.para{
width:50%;
justify-content:center;
text-align:justify;
margin:5.5em 4em 10em 4em;
.birds{
  width:12em;
  position:relative;
  left:4em;
}
 .title{
  width:20em;
  height:auto;
  margin-bottom:1em;
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
   margin:-2em 5em -2em -8em;
 }
}

</style>
