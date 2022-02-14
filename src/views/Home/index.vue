<template>
  <div claa="home">
    <HomeHeader></HomeHeader>

    <div @click="test1()">这是一写测试按111111111111111111</div>
    <div @click="test2()">这是一写测试按22222222222222</div>
  </div>
</template>

<script>
import HomeHeader from './HomeHeader.vue'

export default {
  components: {
    HomeHeader
  },
  data() {
    return {}
  },
  created() {},
  methods: {
    test1() {
      console.log(1)
    },
    test2() {
      console.log(2)
    }
  }
}
</script>
