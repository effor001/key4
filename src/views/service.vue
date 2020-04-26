<template>
  <div class="service page">
    <div class="container main">
      <div class="para">
         <img src="../assets/service.svg" alt="" class="title">
         <p>Key4d lab.ではWebサイトやイラストの製作、UXコンサルティングなどお客様の様々なご要望にお応えします。高品質なオリジナルテンプレートの中からスタイルのカスタマイズも可能です。</p>
      </div>
      <div class="images">
        <div class="hover_me"><div>
          <img src="@/assets/hover_me.svg" alt="">
          <kinesis-container>
          <kinesis-element :strength="10"  type="depth" originX="100" originY="0">
           <img src="../assets/bird_2.svg" alt="" class="bird2">
          </kinesis-element>
         </kinesis-container>
        </div>
        <div class="town">
           <img src="../assets/town.png" alt="" >
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.service{
  display:flex;
  flex-direction:row;
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
  margin:0em 0em 10em 3em;
  display:flex;
  flex-direction:column;
  justify-content:center;
  .title{
  width: 4em;
  transform: rotate(90deg);
  margin: -2em 3em -6em 7em;
  }
  p{
    display: -webkit-box;
     display: -ms-flexbox;
     display: flex;
     -webkit-box-pack: justify;
     -ms-flex-pack: justify;
     justify-content: space-between;
     margin:0 3em 0 0;
  }
}
.images{
  display:flex;
  flex-direction:row;
}
.hover_me{
  width:7em;
  top:3em;
  right:20em;
  position:relative;
  transform:rotate(10deg);
}
.bird2{
  position:relative;
  float:left;
  width:18em;
  transform: matrix(1, -0.03, 0.03, 1, 0, 0);
}
.town{
    width:80%;
    display:block;
    height:auto;
    position:relative;
    margin:0em auto 1em auto;
    
}
</style>
