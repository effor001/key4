<template>
  <div class="contact page">
    <div class="container">
      <div class="side">
        <div class="copy">&copy 2020 Key4d lab. all rights reserved.</div>
      </div>
      <div class="main container">
        <div class="images">
          <img src="../assets/astronaut002_0.png" alt="" class="astro">
          <img src="../assets/bird_4.svg" alt="" class="bird">
        </div>
        <div class="para">
          <div class="dialog">
            <div class="dialog__inner">
              <h3>My Dialog</h3>
              <p>Content</p>
              <a class="btn" @click="close">Close</a>
            </div>
          </div>
          <img src="../assets/contact.svg" alt="" class="title">
          <p>key4d lab. は東京都文京区を拠点にして、 WEBサイト制作、WEBアプリケーション開発、 イラスト制作、広告及びブランド構築の支援をしています。デザインの力で貴社の魅力を最大限引き出して現在抱えている課題の解決、及び目標への強い追い風となります。気になることがあればお気軽にご連絡ください。</p>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  methods:{
    close(){
     this.$router.back()
   }
 }
}

</script>
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

  .astro{
    width: 22em;
    display: block;
    position: absolute;
    margin:0em 5em auto;
    z-index:1;
  }
  .bird{
    width:8em;
    position:relative;
    top:-19em;
    right:-52em;
    transform: matrix(0.97, -0.22, 0.22, 0.97, 0, 0);
  }

  }



</style>
