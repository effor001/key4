<template>
   <div id="stalker"></div>

</template>
<script>
//マウスストーカー用のdivを取得
const stalker = document.getElementById('stalker');

//menuにホバー中かどうかの判別フラグ
let hovFlag = false;

//マウスに追従させる処理 （リンクに吸い付いてる時は除外する）
document.addEventListener('mousemove', function (e) {
    if (!hovFlag) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    }
});

//リンクへ吸い付く処理
const linkElem = document.querySelectorAll('nav , li :not(.no_stick_)',);
for (let i = 0; i < linkElem.length; i++) {
    //マウスホバー時
    linkElem[i].addEventListener('mouseover', function (e) {
        hovFlag = true;

        //マウスストーカーにクラスをつける
        stalker.classList.add('hov_');

        //マウスストーカーの位置をリンクの中心に固定
        let rect = e.target.getBoundingClientRect();
        let posX = rect.left + (rect.width / 2);
        let posY = rect.top + (rect.height / 2);

        stalker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';

    });
    //マウスホバー解除時
    linkElem[i].addEventListener('mouseout', function (e) {
        hovFlag = false;
        stalker.classList.remove('hov_');
    });
}
</script>
<style lang="scss" >
#stalker{
  pointer-events: none;
   position: fixed;
   top: -8px;     //座標調節（カーソル位置と円の中心を合わせる）
   left: -8px;    //座標調節（カーソル位置と円の中心を合わせる）
   width: 20px;   //マウスストーカーの直径
   height: 20px;  //マウスストーカーの直径
   background: purple;
   border-radius: 50%;
   transition: transform 0.2s, top, 0.5s, left 0.5s, width .5s, height .5s, background-color .5s;
   -webkit-transition:transform 0.2s, top, 0.5s, left 0.5s, width .5s, height .5s, background-color .5s;
   transition-timing-function: cubic-bezier(.97,.23,.6,.97);
   -webkit-transition:transform 0.2s, top, 0.5s, left 0.5s, width .5s, height .5s, background-color .5s;
   z-index: 10001;
   &.hov_{
     top: -32px;     //大きさに合わせて座標調節
     left: -32px;    //大きさに合わせて座標調節
     width: 64px;
     height: 64px;
     transition: .5s;
     background: rgba(255, 0, 0, 0.4);
   }
}
</style>
