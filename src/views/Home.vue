<template>
  <div class="home page">
    <div class="container">
        <div class="title">
          <img src="../assets/key4d_lab_title.png" alt="" class="logo">
          <TextAnime3 :autoplay="autoplay"/>
        </div>
        <div class="images">
          <img src="../assets/falcon.png" alt="" class="main-img">
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
    height:100vh;
    background-color: purple;
  }
  .title{
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin:0 15%;
    background-color: yellow;
    .logo{
    width: 50%;
    z-index:3;
    }
  }
  .main-img{
    position: absolute;
    top: -10%;
    right: -5%;
    width: 85%;
    max-width: 100%;
    height: auto;
    transform: rotateZ(5deg)rotateY(180deg);
    z-index: 1;
}

</style>
