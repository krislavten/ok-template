<template>
  <div class="home">
    <h1>Home</h1>

    <img
      v-if="headImage"
      :src="
        `${$appConfig.apiOrigin}/api/download/contract/file?key=${headImage}`
      "
    />
  </div>
</template>

<script>
import { useUserInfo } from '@/hooks/useUserInfo';

export default {
  name: 'Home',
  setup() {
    const { headImage } = useUserInfo();

    return {
      headImage,
    };
  },
};
</script>
