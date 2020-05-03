<template>
  <div class="TextAnime1">
    <transition-group tag="div" class="title">
      <span v-for="el in text" :key="el.id" class="item" v-text="el.text"/>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    autoplay: Boolean
  },
  data() {
    return {
      timer: null,
      index: 0,
      // オリジナルメッセージ
      original: [
        'Hack the ordinary.',
        'Beyond the border.',
        'Paint with your colors.'
      ],
      // 分解したメッセージ
      messages: [],
      text: ''
    }
  },
  computed: {
    editor: {
      get() { return this.text.map(e => e.text).join('') },
      set(text) { this.text = this.convText(text) }
    }
  },
  watch: {
    autoplay(val) {
      clearTimeout(this.timer)
      if (val) {
        this.ticker()
      }
    }
  },
  methods: {
    // デモ用のオートタイマー
    ticker() {
      this.timer = setTimeout(() => {
        if (this.autoplay) {
          this.index = this.index < this.messages.length-1 ? this.index + 1 : 0
          this.text = this.messages[this.index]
          this.ticker()
        }
      }, 5000)
    },
    // テキストを分解してオブジェクトに
    convText(text) {
      const anim = {}
      const result = text.split('').map(el => {
        anim[el] = anim[el] ? ++anim[el] : 1
        return { id: `${el}_${anim[el]}`, text: el }
      })
      return Object.freeze(result) // 監視しない
    }
  },
  created() {
    this.messages = this.original.map(el => this.convText(el))
    this.text = this.messages[0]
    this.ticker()
  }
}
</script>

<style lang="scss" scoped>
.TextAnime1{
  display:block;
  color:$font-color;
  position:absolute;
  bottom:15%;
  z-index:5;
}
.title {
  font-size: 4rem;
  font-family:DINK, sans-serif;
  opacity:0.8;
}
.item {
  display: inline-block;
  min-width: 0.3em;
}
/* トランジション用スタイル */
.v-enter-active,
.v-leave-active,
.v-move {
  transition: all 1s;
}
.v-leave-active {
  position: absolute;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
