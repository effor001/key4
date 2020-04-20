<template>
  <div class="service page">
    <div class="side">
    <div class="copy">&copy 2020 Key4d lab. all rights reserved.</div>
    </div>
    <div class="container main">
      <kinesis-container>
        <kinesis-element :strength="50"  type="depth" originX="100" originY="0">
        <img src="../assets/bird_2.svg" alt="" class="bird2">
         </kinesis-element>
       </kinesis-container>
      <div class="para">
         <img src="../assets/service.svg" alt="" class="title">
         <p>Key4d lab.ではWebサイトやイラストの製作、UXコンサルティングなどお客様の様々なご要望にお応えします。高品質なオリジナルテンプレートの中からスタイルのカスタマイズも可能です。</p>
      </div>
      <div class="images">

        <img src="../assets/town.png" alt="" class="town">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.service{
  display:flex;
  flex-direction:row;
}
.container{
  display:flex;
  flex-direction:column;

}
.para{
  width:50%;
  margin:-5em 0em 10em 10em;
  display:flex;
  flex-direction:row;
  justify-content:center;
  .title{
    width:17em;
  }
  p{
    display: -webkit-box;
     display: -ms-flexbox;
     display: flex;
     -webkit-box-pack: justify;
     -ms-flex-pack: justify;
     justify-content: space-between;
     margin:-1em 3em 0 3em;
  }
}
.images{
  width:100%;
  text-align:center;
  justify-content:center;

  .town{
    width:85%;
    display:block;
    height:auto;
    margin:-24em auto 1em 10em;
  }

}
.bird2{
  position:relative;
  top:5em;
  right:-50em;
  width:14em;
  transform: matrix(1, -0.03, 0.03, 1, 0, 0);
}
</style>
