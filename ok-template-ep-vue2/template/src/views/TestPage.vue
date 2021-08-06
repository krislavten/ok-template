<template>
  <div class="test-page">
    <a-input v-model="keyword" width="200" />
    <a-table
      :columns="columns"
      :data-source="list"
      row-key="id"
      :pagination="pagination"
    />
  </div>
</template>

<script>
import { computed, watch } from '@vue/composition-api';
import { useRequest, useRouteQuery } from '@fenbi/ep-vue-use';
import { getUserList } from '@/api/user';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
];

export default {
  name: 'TestPage',
  setup() {
    const keyword = useRouteQuery('keyword');
    const { loading, data, pagination, run } = useRequest(
      ({ current: page, pageSize }) =>
        getUserList({ page, pageSize, keyword: keyword.value }),
      {
        paginated: true,
      }
    );
    const list = computed(() => {
      return data.value?.data?.data?.list;
    });

    watch(keyword, run);

    return {
      columns,
      keyword,
      loading,
      list,
      pagination,
    };
  },
};
</script>

<style lang="less" scoped>
.test-page {
  padding: 24px;
}
</style>
