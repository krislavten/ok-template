<template>
  <div
    v-if="debugLdap && isShowDebugLdap"
    class="floating-button"
    :style="style"
    @mousedown="mousedown"
  >
    当前模拟ladp：{{ debugLdap }}
  </div>
</template>

<script>
import { useDrag } from '../hooks/useDrag';

export default {
  name: 'FloatingDebugLdapButton',
  setup() {
    const { style, mousedown } = useDrag(600, 50, 'FloatingDebugLdapButton');
    const debugLdap = localStorage.getItem('_debug_ldap_');
    const isShowDebugLdap = process.env.NODE_ENV !== 'production'; // 非正式服才显示debugLdap设置

    return { style, mousedown, debugLdap, isShowDebugLdap };
  },
};
</script>

<style lang="less" scoped>
.floating-button {
  background: pink;
  padding: 8px 12px;
  border-radius: 4px;
  box-shadow: 0px 2px 6px rgba(51, 15, 4, 0.3);
}
</style>
