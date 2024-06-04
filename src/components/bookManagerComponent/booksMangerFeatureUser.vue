<template>
  <div class="backDrop">
    <div class="allSize" ref="allSize">
      <div><router-link to="/book/queryAllBooks">查询书籍</router-link></div>
      <div><router-link to="/book/checkBorrowing" v-if="bookRecord">查询借阅记录</router-link></div>
      <div><router-link to="/book/personalBooks">查询本人书籍</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "booksMangerFeature",
  computed: {
    bookRecord() {
      if (this.$store.state.readRoleId === 3) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @use "sass:math";
  .backDrop {
    background:whitesmoke;
    width: 100%;
    height: 700px;
    perspective: 2000px;
    margin: 50px auto;
  }
  .allSize {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: rotate 10s infinite linear;
    //opacity: 0;
    div {
      background: wheat;
      position: absolute;
      $divWidth: 300px;
      $divHeight: 400px;
      font-size: 40px;
      font-family: "仿宋",serif;
      color:white;
      text-align: center;
      line-height: $divHeight;
      width: $divWidth;
      height: $divHeight;
      left: 50%;
      top: 50%;
      margin-left: -$divWidth / 2;
      margin-top: -$divHeight / 2;
      $n: 3;
      $r: 150px;
      $pDeg: 360deg / $n;
      backface-visibility: hidden;
      opacity: 0.5;
      transition: opacity 0.2s;
      &:hover {
        opacity: 1;
      }
      @for $i from 1 through $n {
        &:nth-child(#{$i}) {
          $d: $i * $pDeg;
          $x: $r * math.sin($d);
          $z: $r * math.cos($d);
          transform: translate3d(#{$x}, 0, #{$z}) rotateY(180deg + $d);
        }
      }
      @keyframes rotate {
        from {
          transform: rotateY(0deg);
        }
        to {
          transform: rotateY(360deg);
        }
      }
    }
  }
</style>