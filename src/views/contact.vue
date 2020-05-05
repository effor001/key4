<template>
  <div class="contact page">
    <div class="main container1">
      <div class="images">
        <img src="../assets/astronaut002_0.png" alt="" class="astro">
      </div>
      <div class="para">
        <div class="titleSection">
          <img src="../assets/contact.svg" alt="" class="title">
          <img src="../assets/bird_4.svg" alt="" class="bird">
        </div>
        <p>KEY4d LAB.にご関心をお持ちいただきまして、誠にありがとうございます。ご意見・ご相談、制作依頼のお見積もりなど、お気軽にお問い合わせください。
          お問い合わせ内容の確認後、速やかに担当者からご連絡差し上げます。下記のお問い合わせ内容を選択してください。</p>
      </div>
    </div>
    <div class="container2">
      <div class="telInfo">
        <p>平日10時~19時はお電話でのお問い合わせも受け付けています。</p>
        <p class="telNum">080-5434-7320</p>
        <p class="telAttention">※お掛け間違いのない様、ご注意ください</p>
      </div>
      <div class="contactSubject">
        <h3> お仕事のご依頼</h3>
        <div class="subjectSelect">
          <router-link to="/contact/web" class="btn-animation-02"><span>WEB制作のご依頼・お見積り   <font-awesome-icon :icon="['fas', 'arrow-right']" size="1x" class="fa-1" /></span></router-link>
          <router-link to="/contact/illustration" class="btn-animation-02"><span>イラスト制作のご依頼・お見積り   <font-awesome-icon :icon="['fas', 'arrow-right']" size="1x" class="fa-1" /></span></router-link>
          <router-link to="/contact/appUI" class="btn-animation-02"><span>アプリUI設計のご依頼・お見積り   <font-awesome-icon :icon="['fas', 'arrow-right']" size="1x" class="fa-1" /></span></router-link>
          <router-link to="/contact/otherDev" class="btn-animation-02"><span>その他のご依頼・お見積り   <font-awesome-icon :icon="['fas', 'arrow-right']" size="1x" class="fa-1" /></span></router-link>
        </div>
        <h3> KEY4d LAB.に関するご質問</h3>
        <div class="subjectSelect">
          <router-link to="/contact/plan" class="btn-animation-02"><span>各種プランについて   <font-awesome-icon :icon="['fas', 'arrow-right']" size="1x" class="fa-1" /></span></router-link>
          <router-link to="/contact/otherAbout" class="btn-animation-02"><span>その他のご質問・ご相談   <font-awesome-icon :icon="['fas', 'arrow-right']" size="1x" class="fa-1" /></span></router-link>
        </div>
        <h3> その他</h3>
        <div class="subjectSelect">
          <router-link to="/contact/media" class="btn-animation-02"><span>メディア取材・掲載   <font-awesome-icon :icon="['fas', 'arrow-right']" size="1x" class="fa-1" /></span></router-link>
          <router-link to="/contact/other" class="btn-animation-02"><span>その他   <font-awesome-icon :icon="['fas', 'arrow-right']" size="1x" class="fa-1" /></span></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      close() {
        this.$router.back()
      }
    }
  }
</script>
<style lang="scss" scoped>
  .contact{
    width: 80%;
    margin: 0 10%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
  }
  .container1 {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 3em;
    margin-bottom: 3em;

    .images{
      width: 40%;
      text-align: center;
      img{
        width: 70%;
      }
    }

    .para{
      width: 60%;
      display: flex;
      flex-direction: column;
      text-align: left;
      .titleSection{
        width: 80%;
        .title{
          width: 70%;
        }
        .bird{
          width: 30%;
        }
      }
      .p{
        width: 100%;
      }
    }
  }

  .container2 {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .telInfo {
      margin-bottom: 2em;
      border: 1px solid $font-color;

      p {
        text-align: center;
      }

      p.telNum {
        font-size: 2em;
        margin: -1em 0;
      }

      p.telAttention {
        font-size: 0.9em;
      }
    }

    .contactSubject {
      h3:before {
        background-color: $font-color;
        /* 線色 */
        border-radius: 3px;
        /* 線幅の半分 */
        content: "";
        display: inline-block;
        height: 37px;
        /* 線の長さ */
        margin-right: 10px;
        /* 線右の余白 */
        vertical-align: middle;
        width: 6px;
        /* 線幅 */
      }
      .subjectSelect{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 2em;
        .btn-animation-02 {
          display: inline-block;
          width: 43%;
          text-align: center;
          margin-bottom: 2em;
          background-color: $font-color;
          border: 2px solid $font-color;
          font-size: 16px;
          color: $font-color;
          text-decoration: none;
          font-weight: bold;
          padding: 10px 24px;
          border-radius: 4px;
          position: relative;
        }

        .btn-animation-02 span {
          position: relative;
          z-index: 1;
        }

        .btn-animation-02::before,
        .btn-animation-02::after {
          content: "";
          display: block;
          background-color: #FFF;
          width: 50%;
          height: 100%;
          position: absolute;
          top: 0;
          transition: .5s;
        }

        .btn-animation-02::before {
          left: 0;
        }

        .btn-animation-02::after {
          right: 0;
        }

        .btn-animation-02:hover:before,
        .btn-animation-02:hover:after {
          width: 0;
          background-color: #FFF;
        }

        .btn-animation-02:hover {
          color: #FFF;
        }
      }
    }
  }
</style>