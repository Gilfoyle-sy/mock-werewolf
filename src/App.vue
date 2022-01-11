<template>
  <router-view />
  <ActionBar></ActionBar>
  <Barrage></Barrage>
</template>

<script>
// @ is an alias to /src
import ActionBar from './components/ActionBar.vue'
import Barrage from './components/Barrage.vue'
export default {
  components: {
    ActionBar,
    Barrage
  }
}
</script>

<style lang="scss">
</style>
