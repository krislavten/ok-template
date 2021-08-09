<template>
  <div class="debug-page">
    <h1>调试页面</h1>

    <div class="row">软件版本：{{ version }}</div>

    <div class="row">
      <a-button type="primary" @click="throwError()">抛错测试</a-button>
    </div>

    <div v-if="isShowDebugLdap" class="row">
      <a-form-model
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        :label-col="{ span: 2 }"
        :wrapper-col="{ span: 6 }"
        @submit="setDebugLdap"
      >
        <a-form-model-item label="debugLdap" prop="debugLdap">
          <a-input v-model="ruleForm.debugLdap" />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 6, offset: 2 }">
          <a-button type="primary" html-type="submit"> 模拟ldap </a-button>
          <a-button style="margin-left: 10px" @click="clearDebugLdap()">
            清除模拟ldap
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
import packageInfo from '@/../package.json';

export default {
  name: 'DebugPage',
  data() {
    return {
      version: packageInfo.version,
      isShowDebugLdap: process.env.NODE_ENV !== 'production', // 非正式服才显示debugLdap设置
      ruleForm: {
        debugLdap: localStorage.getItem('_debug_ldap_') || '',
      },
      rules: {
        debugLdap: [
          { required: true, message: '请输入某用户的ldap', trigger: 'change' },
        ],
      },
    };
  },
  methods: {
    throwError() {
      // console.error('抛错测试' + this.version)
      throw new Error('抛错测试' + this.version);
    },
    setDebugLdap(evt) {
      if (evt?.preventDefault) {
        evt.preventDefault();
      }

      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          localStorage.setItem('_debug_ldap_', this.ruleForm.debugLdap);
          this.$message.success('设置 debugLdap 成功，刷新页面后生效');
        }
      });
    },
    clearDebugLdap() {
      localStorage.removeItem('_debug_ldap_');
      this.$refs.ruleForm.clearValidate();
      this.ruleForm.debugLdap = '';
      this.$message.success('清除 debugLdap 成功，刷新页面后生效');
    },
  },
};
</script>

<style lang="less" scoped>
.debug-page {
  box-sizing: border-box;
  padding: 24px;

  .row + .row {
    margin-top: 24px;
  }
}
</style>
