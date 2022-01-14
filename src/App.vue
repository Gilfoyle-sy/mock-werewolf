<template>
  <router-view />
  <TableBar></TableBar>
  <Barrage></Barrage>
</template>

<script>
// @ is an alias to /src
import Barrage from './components/Barrage.vue'
import TableBar from './components/TableBar.vue'

export default {
  components: {
    Barrage,
    TableBar
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';

html,
body {
  width: 100%;
  height: 100%;
}

body {
  background-image: url(./assets/UI/bg.png);
  /*background-size: 100px 100px;!*这个是按数值缩放*!*/
  background-repeat: no-repeat; /*还有repeat-x,y等*/
}
</style>
