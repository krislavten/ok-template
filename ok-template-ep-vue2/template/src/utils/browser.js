/**
 * 判断是不是企业微信
 */
export const isWework = () => {
  const ua = window.navigator.userAgent.toLowerCase();
  return /MicroMessenger/i.test(ua) && /wxwork/i.test(ua);
};
