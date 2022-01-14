<template>
  <!-- 主页顶部用户信息展示区 -->
  <div class="home-header">
    <!-- 用户基本信息 -->
    <div class="home-header-userinfo">
      <div class="home-header-userinfo_avatar"></div>
      <div class="home-header-userinfo-box">
        <div class="home-header-userinfo-box_name">汉堡包</div>
        <div class="home-header_userinfo-box_title">徒手抓狼</div>
      </div>
    </div>

    <!-- 用户数据 -->
    <div class="home-header-userdata">
      <div class="home-header-userdata_level">等级</div>
      <div class="home-header-userdata_card">紫卡</div>
      <div class="home-header-userdata_coin">金币</div>
      <div class="home-header-userdata_diamond">钻石</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.home-header {
  width: 100%;
  height: 180px;
  // padding: 30px 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba($color: #000000, $alpha: 0.2);

  &-userinfo {
    margin-left: 50px;
    height: 100px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: rgba($color: #c0c0c0, $alpha: 0.3);
    border-radius: 20px;

    &_avatar {
      position: relative;
      right: 20px;
      width: 140px;
      height: 140px;
      background-color: cadetblue;
      border-radius: 50%;
    }

    &-box {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      &_name {
        flex: 1;
        font-size: 30px;
        color: #ffffff;
      }

      &_title {
        flex: 1;
        font-size: 30px;
      }
    }
  }

  &-userdata {
    margin-left: 50px;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-content: center;

    &_level,
    &_card,
    &_coin,
    &_diamond {
      width: 50%;
      align-items: center;
    }
  }
}
</style>
