<template>
  <div class="barrage">
    <div class="barrage-msg">{{ msg.name }}：{{ msg.txt }}</div>
  </div>
</template>

<script>
import { reactreive, ref } from 'vue'
export default {
  setup() {
    const msg = ref({ name: '张三', txt: '这是张三' })

    return {
      msg
    }
  }
}
</script>

<style lang="scss">
.barrage {
  // pointer-events: none;
  // position: absolute;
  // top: 0;
  // left: 0;
  // right: 0;
  // bottom: 0;
  // margin: 180px 0 140px 0;
  width: 100%;

  &-msg {
    pointer-events: none;
    position: absolute;
    z-index: 100;
    color: red;
    animation: barrage 10s linear 0s;
  }
}

@keyframes barrage {
  from {
    // left: 100%;
    transform: translate3d(0, 0, 0);
  }
  to {
    // left: 0;
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
