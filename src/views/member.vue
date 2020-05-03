<template>
  <div class="member page">
    <div class="container">
      <div class="header">
        <div class="para">
          <div class="hover">
            <img src="@/assets/hover_us.svg" alt="">
          </div>
          <div class="para">
            <kinesis-container>
              <kinesis-element :strength="10"  type="depth" >
                <img src="../assets/bird_5.svg" alt="" class="birds">
              </kinesis-element>
            </kinesis-container>
            <h1><img src="../assets/member_1.svg" alt="" class="title"></h1>
            <p>Key4d lab.はメンバーそれぞれの強みを生かしたクリエーションを提供します。</p>
          </div>
        </div>
    </div>
    <div class="introduction">
        <div class="member_module">
          <h2>NYAHON/にゃほん</h2>
          <div class="sns">
            <a href="https://twitter.com/AR_OL_chan">
              <font-awesome-icon :icon="['fab', 'twitter']" size="2x" class="fa-1" /></a>
            <a href="#">
              <font-awesome-icon :icon="['fab', 'instagram']" size="2x" class="fa-2"/></a>
          </div>
          <div class="inner_module">
            <div class="skill_set">
            <div class="skills"><font-awesome-icon :icon="['fas', 'drafting-compass']" size="3x" class="skill_icon" /><P>デザイン</p></div>
            <div class="skills"><font-awesome-icon :icon="['fas', 'code']" size="3x" class="skill_icon" /><p>コーディング</p></div>
            <div class="skills"><font-awesome-icon :icon="['fas', 'palette']" size="3x" class="skill_icon" /><p>イラスト製作</p></div>
          <div class="skills"><font-awesome-icon :icon="['fas', 'cube']" size="3x" class="skill_icon"/><p>3Dモデリング</p></div>
          <div class="skills"><font-awesome-icon :icon="['fab', 'app-store']" size="3x" class="skill_icon" /><p>アプリケーション開発</p></div>
            <div class="skills"><font-awesome-icon :icon="['fas', 'poll']" size="3x" class="skill_icon"/><p>ブランド戦略・マーケティング</p></div>
            </div>
            <div class="member_img">
            <img src="@/assets/nyahon2.png" alt="">
          </div>
            </div>

        </div>
        <div class="member_module">
          <h2>TAQUU/たくぅ</h2>
          <div class="sns">
            <a href="https://twitter.com/AR_OL_chan">
            <font-awesome-icon :icon="['fab', 'twitter']" size="2x" class="fa-1" /></a>
            <a href="#">
            <font-awesome-icon :icon="['fab', 'instagram']" size="2x" class="fa-2"/></a>
        </div>
          <div class="inner_module">
          <div class="member_img">
          <img src="@/assets/taquu2.png" alt=""></div>
          <div class="skill_set">
          <div class="skills"><font-awesome-icon :icon="['fas', 'drafting-compass']" size="3x" class="skill_icon" /><P>デザイン</p></div>
          <div class="skills"><font-awesome-icon :icon="['fas', 'code']" size="3x" class="skill_icon" /><p>コーディング</p></div>
          <div class="skills"><font-awesome-icon :icon="['fas', 'video']" size="3x" class="skill_icon" /><p>アニメーション製作</p></div>
        <div class="skills"><font-awesome-icon :icon="['fas', 'grin-squint']" size="3x" class="skill_icon"/><p>UI/UXコンサルティング</p></div>
        <div class="skills"><font-awesome-icon :icon="['fab', 'app-store']" size="3x" class="skill_icon" /><p>アプリケーション開発</p></div>
          <div class="skills"><font-awesome-icon :icon="['fas', 'poll']" size="3x" class="skill_icon"/><p>ブランド戦略・マーケティング</p></div>
          </div>

          </div>

        </div>
    </div>
</div>
</div>
</template>


<style lang="scss" scoped>

.member {
    width: $width-wrap;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
  .container{
    background-color: none;
    width:$main-wrap;
    margin:5% 0 0 10% ;
    .header{
      background-color: none;
      display:flex;
      flex-direction:row;
      justify-content: space-between;
      .hover{
        position:relative;
        width:6em;
        top: 5%;
        left:0;
      }
      .birds{
        width:12em;
        position:relative;
      }
      .para{
        width:100%;
        background-color: none;
        display:block;
        text-align:justify;
        align-content: center;
        margin:2em auto;
        .title{
          width:40%;
          height:auto;
          margin-bottom:2em;
        }
      }
    }
    .member_module{
      background-color: none;
      display:flex;
      flex-direction:column;
      align-content:space-between;
      margin-top:10%;
      .inner_module{
        flex:1;
        display:flex;
        p{
          margin:auto 1.5%;
          height:10%;
        }
        .member_img{
          width:60%;
          height:auto;
          >img{
          width:100%;
          }
        }
      }
      .sns{
        display:flex;
        flex:1;
        background-color: none;
        justify-content:flex-end;
         .fa-twitter{
           margin-right:1.5rem;
         }
      }
      .skill_set{
        display:grid;
        flex:1;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-items: center;
        width:auto;
        height:50%;
        margin:5%;
        background-color:none;
        .skills{
          background-color: none;
          width:80%;
          height:90%;
          display:flex;
          flex-direction: column;
          align-items: center;
          text-align:center;
          margin-top: 5%;
        }
        .skill_icon{
          margin: 3%;
        }
        p{
          margin:2%;
        }
      }
    }
  }
}
</style>
