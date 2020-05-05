<template>
  <div class="service page">
    <div class="container">
      <div class="header">
        <div class="para">
          <h1><img src="../assets/service.svg" alt="" class="title"></h1>
          <p>Key4d lab.ではWebサイトやイラストの製作、UXコンサルティングなどお客様の様々なご要望にお応えします。高品質なオリジナルテンプレートの中からスタイルのカスタマイズも可能です。</p>
        </div>
       <div class="images">
          <div class="hover_me">
          <img src="@/assets/hover_me.svg" alt="">
          </div>
          <kinesis-container>
             <kinesis-element :strength="10"  type="depth" originX="100" originY="0">
              <img src="../assets/bird_2.svg" alt="" class="bird2">
             </kinesis-element>
          </kinesis-container>

      </div>
    </div>
  </div>
      <div class="town">
        <div class="more_to_come"></div>
      <img src="../assets/landscape.png" alt="" class="landscape" >
      </div>
  </div>
  </div>
  </div>
  </div>
</template>

<style lang="scss" scoped>
.service{
    width:$width-wrap;
    overflow-y:scroll;
    &::-webkit-scrollbar{
      display:none;
    }
    .container{
      background-color:none;
      width:$main-wrap;
      margin:5% 0 0 10% ;
      // スマホ
      @include media(s){
      width:70%;
      margin: 10% 20% 0 20%;
      }
      }
      .header{
        background-color:none;
        display:flex;
        flex-direction:row;
        justify-content: space-between;
        @include media(s){
          flex-direction: column;
        }
        }
        .para{
          width:60%;
          text-align:left;
          background-color: none;
          @include media(s){
            width:100%;
          }
          }
          .title{
          width: 60%;
          margin-bottom:2em;
          }
          .images{
            background-color: none;
          .hover_me{
            width:10em;
            right:-80%;
              @include media(s){
              width:30%;
              margin-left:80%;
              }
          }
          .bird2{
            position:relative;
            width:18em;
            transform: matrix(1, -0.03, 0.03, 1, 0, 0);
            @include media(s){
              width:40%;
              margin-left:50%;
              }
          }
        }
          .town{
            width:90%;
            height:auto;
            display:block;
            margin:0 auto ;
            text-align: center;
            .landscape{
              width:80%;
              height:auto;
              @include media(s){
                width:120%;
              }
            }
          }
        }

// tentative
.more_to_come{
  transform: rotate(-20deg);

}
</style>
