<template>
  <div id="app">
    <a-config-provider :locale="zhCN">
      <a-layout class="app-container">
        <!-- 左侧栏 -->
        <a-layout-sider class="sider-container">
          <TheSidebar />
        </a-layout-sider>

        <!-- 主体内容 -->
        <a-layout-content class="content-container">
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-config-provider>

    <FloatingDebugLdapButton />
  </div>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import TheSidebar from '@/components/TheSidebar.vue';
import FloatingDebugLdapButton from '@/components/FloatingDebugLdapButton.vue';

export default {
  name: 'App',
  components: {
    TheSidebar,
    FloatingDebugLdapButton,
  },
  data() {
    return {
      zhCN,
    };
  },
};
</script>

<style lang="less" scoped>
#app {
  position: relative;
  background-color: #e5e5e5;
  font-family: PingFang SC;
  font-style: normal;
  font-weight: normal;

  .app-container {
    min-height: 100vh;
    background-color: #e5e5e5;

    .content-container {
      margin: 16px;
      background-color: #fff;
      border-radius: 2px;
    }
  }
}
</style>
