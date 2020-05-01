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
  background-color: blue;
  width:$main-wrap;
  margin:5% 0 0 10% ;
}
.header{
  background-color: purple;
  display:flex;
  flex-direction:row;
  justify-content: center;
}
.para{
  flex:1;
  text-align:justify;
  justify-content:center;
   .title {
    width:60%;
    height:auto;
    margin-bottom:2em;
    }
  }
.images{
  width:50%;
  background-color: blue;
    .bird_woman{
      width:auto;
      height:95%;
      margin-left:-60%;
    }

  }



</style>
