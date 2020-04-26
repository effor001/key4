<template>
  <div class="whoweare page">
    <div class="container">
      <div class="main">
        <div class="container">
          <div class="images">
            <kinesis-container event="scroll" >
              <kinesis-element :strength="1000"  type="translate" axis="x"  >
              <img src="../assets/bird_1.svg" alt="" class="bird1">
               </kinesis-element>
            </kinesis-container>
            <img src="../assets/whoweare_hands.png" alt="" class="hands">
          </div>
          <div class="para">
            <div class="title">
              <img src="../assets/whoweare.svg" alt="" class="logo">
              <p>従来のスタイルを打ちやぶる《モダン》で《クール》なwebサイトを、スピーディーに。デザインxテクノロジーで”貴方らしさ”を極限まで追求する。Key4d lab.が目指すのはそんな新しいプラットフォームです。</p>
            </div>
          </div>
      </div>
      <div class="policy">
        <h1>Key4d lab.が大切にしているもの</h1>
        <div class="policy_module">
          <!-- 低コスト、短納期 -->
          <h2>Hack the ordinary.</h2>　
          <h3>日常を”ハック”する。</h3>　
            <p>
              それは「当たり前」を見直すことから始まります。
              webサービスの需要は様々です。<br/>
              何度も打ち合わせを重ねる必要のある大規模開発ばかりではないでしょう。<br/>
              「新しいビジネスのためにとにかく早くwebを整備したい。」
              「趣味の作品を公開するページを低コストで作りたい。」<br/>
              私たちは、受注時の煩雑な手続きをカットしつつ、柔軟性を最大限確保することで、
              そういった要望に応える存在でありたいと願っています。
              デザインとテクノロジー、そして「当たり前」を裏切るちょっとした遊び心で、
              Key4d lab.は新しい価値を提供します。</p>
        </div>
        <div class="policy1">
          <!-- テンプレートの柔軟性 -->
          <h2>Paint with your colors.</h2>
          <h3>貴方の色を見つけましょう。</h3>
          <div class="policy_module">
            <div class="policy_img">
              <img src="@/assets/paint_ur_color.png" alt="" class="paint_ur_color">
            </div>
          <p>Key4d lab.の最大の特徴は、多様なテンプレートデザインです。<br/>
            「テンプレート」という言葉に悪い印象はありませんか？画一的だったり、オリジナリティが出せなかったり。<br/>
          　　Webデザインは貴方自身とビジネスを体現するものであるべき、というのが私たちの信念です。<br/>
          　　低コスト・短納期でも「貴方の色」で彩るサービスを。
             Key4d lab.の多様なテンプレートは、貴方のブランド力向上を可能にします。
          </p>

          </div>
          </div>
          <div class="policy3">
            <!-- XRへの布石 -->
          <h2>Beyond the border.</h2>
          <h3>境界線のその先へ。</h3>
        <p>
          利便性の面でもエンターテイメントの面でも、web技術は年々進化を遂げています。<br/>
        　今の「最先端」は常に更新され続けています。
          また、XR技術の発達とネットワーク技術の進展によって、webページがブラウザを必要としなくなる日も近いでしょう。
          プラットフォームに応じたユーザーエクスペリエンスの「境界線」はますます曖昧になっていきます。
          この進化と時勢を的確に捉えて、ビジネスの可能性を最大限に高めたい。<br/>
          Key4d lab.はデザインとテクノロジーの可能性を信じています。
        </p>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>
<script>



</script>
<style lang="scss" scoped>
  .whoweare{
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
  text-align:justify;
  margin:15em 10em 10em 4em;
   .logo {
    width:20em;
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
    justify-content:space-between;
  .bird1{
    position:relative;
    width:12em;
    display:block;
    top:2em;
    transform: matrix(0.99, -0.16, 0.16, 0.99, 15, 0);
    margin:0 10em 0 0em;
    z-index:999;
  }

  .hands{
    position:absolute;
    width:25em;
    display:block;
    top:10em;
    z-index:1;

  }
  }

.policy_module{
  display:flex;
  flex-direction:row;
  width:100%;
  .policy_module{
    width:50%;
  }
  }
  .paint_ur_color{
        width:70%;
}


</style>
