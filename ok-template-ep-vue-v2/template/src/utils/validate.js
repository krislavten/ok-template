/**
 * 判断字符串是不是合法邮箱地址
 * @param {string} str 输入字符串
 */
export const isEmail = (str) => {
  return /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(str);
};

/**
 * 判断字符串是不是合法手机号
 * @param {string} str 输入字符串
 */
export const isPhone = (str) => {
  return /^1[3-9]\d{9}$/.test(str);
};

/**
 * 判断字符串是不是只包含汉字、数字、字母及常用字符。
 * 因为h3的表单不支持除此之外的特殊字符，如 emoji 等
 */
export const hasNoSpecialStr = (str) => {
  return /^[\u4e00-\u9fa5\w\s·~！@#￥%……&*（）——-【】、；‘’：“”《》？，。、`!;'':"",<>=/\-.^*$｜|[\]\\(){}+?]+$/.test(
    str
  );
};
