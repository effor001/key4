<template>
  <div class="home page">
    <div class="container">
      <div class="main">
        <div class="title">
          <img src="../assets/key4d_lab_title.png" alt="" class="logo">
          <TextAnime3 :autoplay="autoplay"/>
        </div>
        <div class="images">

          <img src="../assets/pigeon.png" alt="" class="main-img">
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
  .home{
    overflow:hidden;
  }
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
      justify-content:left;
      margin:40em 0 0 2em;
      p{
        margin-right:-5em;
        z-index:5;
      }
  }
  .logo{
    width: 50%;
    z-index:3;
    margin-top:-20em;
  }
  .main-img{
    position: absolute;
    top: -13em;
    right: -4em;
    width: 85%;
    max-width: 100%;
    height: auto;
    transform: rotateZ(5deg)rotateY(180deg);
    z-index: 1;
}

</style>
