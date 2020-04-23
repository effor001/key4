<template>
  <div class="whoweare page">
    <div class="container">
      <div class="main">
        <div class="container">
          <div class="images">
            <kinesis-container event="scroll" >
              <kinesis-element :strength="1000"  type="translate" axis="x"  >
              <img src="../assets/bird_1.svg" alt="" class="bird1">
               </kinesis-element>
            </kinesis-container>
            <img src="../assets/whoweare_hands.png" alt="" class="hands">
          </div>
          <div class="para">
            <div class="title">
              <img src="../assets/whoweare.svg" alt="" class="logo">
              <p>従来のスタイルを打ちやぶる《モダン》で《クール》なwebサイトを、スピーディーに。デザインxテクノロジーで”貴方らしさ”を極限まで追求する。Key4d lab.が目指すのはそんな新しいプラットフォームです。</p>
            </div>
          </div>
      </div>
      <div class="policy">
        <h1>Key4d lab.が大切にしているもの</h1>

        <div class="policy1">
          <h2>Hack the ordinary.</h2>
          <p>日常は素晴らしいものです。</p>
        </div>
        <div class="policy2">Beyond the border.</div>
        <div class="policy3">Paint with your colors.</div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>



</script>
<style lang="scss" scoped>
  .whoweare{
    width:$width-wrap;
    overflow-y:scroll;
    &::-webkit-scrollbar{
      display:none;
    }
  }
  .container{
  display:flex;
  flex-direction:row;
  }

  .para{
  width:50%;
  text-align:justify;
  margin:15em 10em 10em 4em;
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
    justify-content:space-between;
  .bird1{
    position:relative;
    width:12em;
    display:block;
    top:2em;
    transform: matrix(0.99, -0.16, 0.16, 0.99, 15, 0);
    margin:0 10em 0 20em;
    z-index:999;
  }

  .hands{
    position:absolute;
    width:25em;
    display:block;
    top:10em;
    z-index:1;

  }
  }




</style>
