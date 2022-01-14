<template>
  <div class="table-bar">
    <router-link class="table-bar-item" active-class="table-bar-item_active" to="/">
      <span class="iconfont">&#xe601;</span>
      <span class="table-bar-item-title">首页</span>
    </router-link>
    <!-- <router-link
      class="table-bar-item"
      active-class="table-bar-item_active"
      to="/gameroom"
    >
      <span class="iconfont">&#xe600;</span>
      <span class="table-bar-item-title">房间</span>
    </router-link> -->
    <router-link
      class="table-bar-item"
      active-class="table-bar-item_active"
      to="/friendlist"
    >
      <span class="iconfont">&#xe604;</span>
      <span class="table-bar-item-title">好友</span>
    </router-link>
    <router-link
      class="table-bar-item"
      active-class="table-bar-item_active"
      to="/equipment"
    >
      <span class="iconfont">&#xe602;</span>
      <span class="table-bar-item-title">物品</span>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.table-bar {
  position: absolute;
  bottom: 0;
  height: 140px;
  width: 100%;
  background-color: rgba($color: #000000, $alpha: 0.4);
  display: flex;
  justify-content: stretch;
  align-items: stretch;

  &-item {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .iconfont {
      font-size: 40px;
    }

    &-title {
      font-size: 25px;
    }
  }

  &-item_active {
    color: #faa755;
  }
}
</style>
