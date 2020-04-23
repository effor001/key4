<template>
  <div class="custom-cursor">
    <div class="custom-cursor__circle" :style="circleStyle" ref="customCursorCircle"></div>

  </div>
</template>

<script>
export default {
  name: "CustomCursor",
  props: {
    targets: Array,
    circleColor: String,
    circleColorHover: String,
    dotColor: String,
    dotColorHover: String,
    hoverSize: Number
  },
  data() {
    return {
      scale: 1,
      x: null,
      y: null,
      circlePosX: null,
      circlePosY: null,
      dotPosX: null,
      dotPosY: null,
      circleStyle: null,
      dotStyle: null
    };
  },
  methods: {
    customCursor(e) {
      // cursor pos
      this.x = e.clientX;
      this.y = e.clientY;
      // cursor circle
      const circle = this.$refs.customCursorCircle;
      this.circlePosX = this.x - circle.clientWidth / 2;
      this.circlePosY = this.y - circle.clientWidth / 2;

      //change style when hovering on selected targets
      if (
        (this.targets.length > 0 &&
          this.targets.includes(e.target.tagName.toLowerCase())) ||
        this.targets.includes(e.target.className.toLowerCase())
      ) {
        this.scale = this.hoverSize;
        this.circleStyle = { backgroundColor: this.circleColorHover };
      } else {
        this.scale = 1;
        this.circleStyle = { backgroundColor: this.circleColor };
      }
      //move custom cursor
      circle.style.transform = `translate(${this.circlePosX}px,${this.circlePosY}px) scale(${this.scale})`;
      dot.style.transform = `translate(${this.dotPosX}px,${this.dotPosY}px)`;
    }
  },
  mounted() {
    window.addEventListener("mousemove", this.customCursor);
  }
};
</script>

<style lang="scss" scoped>
$ease: cubic-bezier(0.23, 1, 0.32, 1);
.custom-cursor {
  cursor: none;
  pointer-events: none;
}
.custom-cursor__circle {
  position: fixed;
  cursor: none;
  top: 0;
  left: 0;
  width: 34px;
  height: 34px;
  border: none;
  border-radius: 50%;
  background-color:purple;
  opacity:0.6;
  transform: translate(-100%, -100%);
  transition: transform 0.3s ease-out;
  z-index:10001;


}
.custom-cursor__dot {
  position: fixed;
  top: -8px;     //座標調節（カーソル位置と円の中心を合わせる）
  left: -8px;    //座標調節（カーソル位置と円の中心を合わせる）
  width: 25px;   //マウスストーカーの直径
  height: 25px;  //マウスストーカーの直径
  background: purple;
  opacity:0.9;
  border-radius: 50%;
  transition: transform 0.2s, top, 0.5s, left 0.5s, width .5s, height .5s, background-color .5s;
  -webkit-transition:transform 0.2s, top, 0.5s, left 0.5s, width .5s, height .5s, background-color .5s;
  transition-timing-function: ease-out;
  -webkit-transition:transform 0.2s, top, 0.5s, left 0.5s, width .5s, height .5s, background-color .5s;
  z-index: 10001;
}
</style>
