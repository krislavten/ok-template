import { isRef } from '@vue/composition-api';

/**
 * 解出对象第一层中所有的 ref，和 vue 的 toRefs 函数对应
 * @param {Object} objOfRefs
 */
export const unRefs = (objOfRefs) => {
  const result = {};

  if (objOfRefs) {
    Object.keys(objOfRefs).forEach((key) => {
      result[key] = isRef(objOfRefs[key])
        ? objOfRefs[key].value
        : objOfRefs[key];
    });
  }

  return result;
};

/**
 * 将 form 中的属性复制到 to 中
 * @param {Object} to 目标对象
 * @param {Object} form 被复制对象
 */
export const copyProps = (to, form) => {
  if (!to || !form) {
    return;
  }

  Object.keys(form).forEach((key) => {
    to[key] = form[key];
  });
};
