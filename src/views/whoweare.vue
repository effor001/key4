<template>
  <div class="whoweare page">
    <div class="container">
      <div class="side">
          <div class="copy">&copy 2020 Key4d lab. all rights reserved.</div>
      </div>
      <div class="main container">
        <div class="images">
          <img src="../assets/bird_1.svg" alt="" class="bird1">
          <img src="../assets/diamond1.png" alt="" class="diamond">
          <img src="../assets/hands.png" alt="" class="hands">
        </div>
        <div class="para">
          <div class="title">
            <img src="../assets/whoweare.svg" alt="" class="logo">
            <p>従来のスタイルを打ちやぶる《モダン》で《クール》なwebサイトを、スピーディーに。デザインxテクノロジーで”貴方らしさ”を極限まで追求する。Key4d lab.が目指すのはそんな新しいプラットフォームです。</p>
          </div>
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
  text-align:justify;
  margin:10em 10em 10em 4em;
   .logo {
    width:20em;
    height:auto;
    margin-bottom:2em;
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
    width:50%;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
  .bird1{
    position:relative;
    width:12em;
    display:block;
    top:-22em;
    transform: matrix(0.99, -0.16, 0.16, 0.99, 15, 0);
    margin:0 0 0 12em;
    z-index:3;
  }
  .diamond{
    position:relative;
    width:7em;
    display:block;
    top:-21em;
    transform: translate(35px,-55px);
    margin:0 auto;
    z-index:2;
  }
  .hands{
    position:absolute;
    width:28em;
    display:block;
    top:19em;
    z-index:1;

  }
  }



</style>
