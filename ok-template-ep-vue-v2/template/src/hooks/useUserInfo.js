import { computed } from '@vue/composition-api';
import { getUserInfoDetail } from '@/api/user';
import { useRequest } from '@fenbi/ep-vue-use';

/**
 * 获取用户信息
 */
export const useUserInfo = () => {
  const { data } = useRequest(getUserInfoDetail);

  const userLdap = computed(() => {
    return data.value?.data?.name || '';
  });
  const headImage = computed(() => {
    return data.value?.data?.headImage || '';
  });

  return {
    userLdap,
    headImage,
  };
};
