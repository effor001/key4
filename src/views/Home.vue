<template>
  <div class="home page">
    <div class="container">
      <div class="side">
        <div class="copy">&copy 2020 Key4d lab. all rights reserved.</div>
      </div>
      <div class="main">
            <div class="title">
            <img src="../assets/main-logo.svg" alt="" class="logo">
            <p>Design×Technologyで</br>「貴方らしさ」を追求したWebサイトを</p>
            </div>
        <div class="images">
          <TextAnime3 :autoplay="autoplay"/>
          <img src="../assets/pigeon.png" alt="" class="main-img">
        </div>
      </div>
    </div>
 </div>

  </div>

</template>
<script>

import TextAnime3 from '@/components/TextAnime3'

export default {
  components: {
    TextAnime3
  },
  data() {
    return {
      autoplay: true
    }
  }
}

</script>
<style lang="scss" scoped>
  .container{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:$width-wrap;
  }

  .main{
    display:flex;
    flex-direction:row;
  }
    .title{
      display:flex;
      flex-direction:column;
      justify-content:space-evenly;
      margin:7em 0 0 2em;
      &::before{
        content:"";
        display:block;
        margin:0 auto;
        width:220px;
        height:220px;
        background-color:yellow;
        opacity:0.6;
        transform: rotate(45deg)
        skew(
        calc((90deg - 60deg) / 2),
        calc((90deg - 60deg) / 2)
      );

      }
      p{
        margin-top:-4em;
        margin-right:-5em;
        z-index:5;
      }
  }
  .logo{
    width: 20em;
    z-index:3;
    margin-top:-20em;
  }
  .main-img{
    position: relative;
    top: 0;
    right:0;
    width: auto;
    max-height: 100vh;
    transform: rotateY(180deg);
    z-index:1;
}

</style>
