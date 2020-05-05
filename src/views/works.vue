<template>
  <div class="works page">
    <div class="container">
      <div class="header">
        <div class="para">
          <h1><img src="../assets/works.svg" alt="" class="title"></h1>
          <p>一般企業サイトからECサイトやランディングページなどどんな形態のWEBサイトも柔軟に幅広い製作に携わっています。イラストデザインにも強みがあり、名刺やパンフレットの製作などを通じてお客様のブランド構築のお手伝いも承っております。</p>
        </div>
        <div class="images">
          <img src="../assets/birds-woman4.png" alt="" class="bird_woman">
        </div>
      </div>
    <div class="more_to_come"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.works{
  width:$width-wrap;
  overflow-y:scroll;
  &::-webkit-scrollbar{
    display:none;
  }
}
.container{
  background-color: none;
  width:$main-wrap;
  margin:5% 0 0 10%;
  // スマホ
  @include media(s){
  width:70%;
  margin: 10% 20% 0 20%;
  }
  .header{
    background-color: none;
    display:flex;
    flex-direction:row;
    justify-content: center;
      @include media(s){
        flex-direction: column;
      }
    .para{
      flex:1;
      text-align:justify;
      justify-content:center;
      .title {
        width:90%;
        height:auto;
        margin-bottom:2em;
        // スマホ
        @include media(s){
        width:60%;
        }
      }
    }
    .images{
      width:70%;
      background-color: none;
      @include media(s){
        width:100%;
        text-align: center;
      }
      .bird_woman{
        width:100%;
        height:100%;
      }
    }
  }
}
 // 建設中
 .more_to_come{
   transform:rotate(10deg);
   margin-top:10%;
   @include media(s){
     margin-top:-20%;

   }
 }
</style>
