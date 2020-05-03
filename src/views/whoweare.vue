<template>
<div class="whoweare page">
    <div class="container">
      <div class="header">
      <div class="images">
        <kinesis-container event="scroll">
          <kinesis-element :strength="100"  type="translate" axis="x" transform-origin="right top">
              <img src="../assets/bird_1.svg" alt="" class="bird1">
          </kinesis-element>
        </kinesis-container>
      </div>
        <div class="title">
          <h1><img src="../assets/whoweare.svg" alt="" class="title"></h1>
        </div>
      <div class="introduction">
        <p>従来のスタイルを打ちやぶる《モダン》で《クール》なwebサイトを、スピーディーに。デザインxテクノロジーで”貴方らしさ”を極限まで追求する。Key4d lab.が目指すのはそんな新しいプラットフォームです。</p>
      </div>
    </div>
    <div class="article_wrapper">
      <div class="policy_module ">
        <h2>Hack the ordinary.</h2>　
        <h3>日常を”ハック”する。</h3>　
        <div class="inner_module policy1">
          <p>それは「当たり前」を見直すことから始まります。<br/>
            webサービスの需要は様々です。
            何度も打ち合わせを重ねる必要のある大規模開発ばかりではないでしょう。<br />
           「新しいビジネスのためにとにかく早くwebを整備したい。」
           <br />
           「趣味の作品を公開するページを低コストで作りたい。」<br />
            私たちは、受注時の煩雑な手続きをカットしつつ、柔軟性を最大限確保することで、
            そういった要望に応える存在でありたいと願っています。
            デザインとテクノロジー、そして「当たり前」を裏切るちょっとした遊び心で、
            Key4d lab.は新しい価値を提供します。</p>
          <div class="policy_img">
            <img src="@/assets/candy_cigar.png" alt="" class="candy_cigar">
          </div>
        </div>
      </div>
        <div class="policy_module">
          <h2 class="policy2_ch">Paint with your colors.</h2>
          <h3 class="policy2_ch">貴方の色を見つけましょう。</h3>
          <div class="inner_module">
            <div class="policy_img">
            <img src="@/assets/paint_ur_color.png" alt="" class="paint_ur_color">
            </div>
            <p>Key4d lab.の最大の特徴は、多様なテンプレートデザインです。<br />
              「テンプレート」という言葉に悪い印象はありませんか？画一的だったり、オリジナリティが出せなかったり。<br />
              Webデザインは貴方自身とビジネスを体現するものであるべき、というのが私たちの信念です。<br />
              低コスト・短納期でも「貴方の色」で彩るサービスを。
              Key4d lab.の多様なテンプレートは、貴方のブランド力向上を可能にします。
            </p>
          </div>
        </div>
        <div class="policy_module">
          <h2 >Beyond the border.</h2>
          <h3>境界線のその先へ。</h3>
          <p>利便性の面でもエンターテイメントの面でも、web技術は年々進化を遂げています。<br />
            今の「最先端」は常に更新され続けています。
            また、XR技術の発達とネットワーク技術の進展によって、webページがブラウザを必要としなくなる日も近いでしょう。
            プラットフォームに応じたユーザーエクスペリエンスの「境界線」はますます曖昧になっていきます。
            この進化と時勢を的確に捉えて、ビジネスの可能性を最大限に高めたい。<br />
            Key4d lab.はデザインとテクノロジーの可能性を信じています。
          </p>
          <div class="policy_img3">
            <img src="@/assets/whale_jump.png" alt="" class="whale">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>
<script>



</script>
<style lang="scss" scoped>
h2{
  font-size: 3rem;
}
h3{
  font-size:1.5rem;
}
.whoweare {
    width: $width-wrap;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
}
  .container {
    width:$main-wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5% 10% 0 10%;
    background-color: none;
    .header{
      display:flex;
      flex-direction:column;
      .title {
        width: 80%;
        height: auto;
        margin-bottom:2em;
      }
      p{
        text-align: justify;
      }
      .images {
        display: flex;
        flex-direction: column;
        align-items: space-between;
        flex:1;
        background-color:none;
        .bird1 {
          position: relative;
          width: 10%;
          transform: rotateY(180deg);
          z-index: 999;
        }
      }
    }
    .article_wrpper{
      width:$main-wrap;
      margin:0 auto;
      background-color:none;
    }
  .policy_module{
      display: flex;
      flex-direction: column;
      justify-content:space-evenly;
      margin:10% auto;
    }
    .inner_module{
      display: flex;
      flex:1;
        .policy_img{
          width:100%;
          text-align:center;
          p{
            flex:1;
          }
          .policy2_ch {
            text-align:right;
          }
          .candy_cigar {
            width:100%;
          }
          .paint_ur_color {
            width: 70%;
          }
        }
      }
        .policy_img3{
            width:100%;
          }
          .whale {
            background-color: none;
            width: 100%;
            margin-top:5%;
          }
        }

  }

</style>
