/**
 * 所有的业务http接口
 */

import http from 'axios';

/**
 * 获取用户个人信息的详情
 */
export function getUserInfoDetail() {
  return http.get('/api/user/detail');
}

export function getUserList({ page, pageSize, keyword }) {
  return http.get('http://apihub-test.zhenguanyu.com/mock/851/api/v1/project', {
    params: { page, pageSize, keyword },
  });
}
