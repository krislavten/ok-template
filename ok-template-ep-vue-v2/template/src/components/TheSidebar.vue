<template>
  <div class="the-sidebar">
    <a-popover trigger="click" placement="right">
      <div slot="content">
        <span style="cursor: pointer" @click="logout">退出</span>
      </div>
      <div class="user-info">
        <a-button type="link">
          <span>{{ userLdap }}</span>
          <a-icon type="right" />
        </a-button>
      </div>
    </a-popover>
  </div>
</template>

<script>
import { useUserInfo } from '@/hooks/useUserInfo';

const logout = () => {
  window.location.href = `https://account.zhenguanyu.com/logout?from=${encodeURIComponent(
    window.location.href
  )}`;
};

export default {
  name: 'TheSidebar',
  setup() {
    const { userLdap } = useUserInfo();

    return {
      userLdap,
      logout,
    };
  },
};
</script>

<style lang="less" scoped>
.user-info {
  height: 44px;
  position: absolute;
  color: #fff;
  left: 20px;
  right: 10px;
  bottom: 8px;

  .ant-btn {
    color: #fff !important;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }
}
</style>
