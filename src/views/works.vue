<template>
  <div class="works page">
    <div class="container">
      <div class="side">
        <div class="copy">&copy 2020 Key4d lab. all rights reserved.</div>
      </div>
      <div class="main container">
        <div class="images">
          <img src="../assets/bird_3.svg" alt="" class="bird3">
          <img src="../assets/diamond2.png" alt="" class="diamond2">
          <img src="../assets/turntable-key4x.png" alt="" class="turntable">
        </div>
        <div class="para">
          <img src="../assets/works.svg" alt="" class="title">
          <p>一般企業サイトからECサイトやランディングページなどどんな形態のWEBサイトも柔軟に幅広い製作に携わっています。イラストデザインにも強みがあり、名刺やパンフレットの製作などを通じてお客様のブランド構築のお手伝いも承っております。</p>
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
  justify-content:center;
  margin:10em 5em 10em 10em;
   .title {
    width:18em;
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
    justify-content:center;
  .bird3{
    width:6em;
    position:relative;
    display:block;
    top:-2em;
    margin:0 auto;
    z-index:3;
  }
  .diamond2{
    width:7em;
    display:block;
    position:relative;
    top:-3em;
    transform:translateX(14px);
    margin: 0 auto;
    z-index:2;
  }
  .turntable{
    width: 30em;
    display: block;
    position: absolute;
    margin-left:2.2em;
    top:10em;
    z-index:1;
  }

  }



</style>
