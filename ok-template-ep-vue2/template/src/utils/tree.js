/**
 * 树查找。深度优先
 * @param {Array} tree
 * @param {Function} predicate
 */
export const find = (tree, predicate) => {
  if (!Array.isArray(tree)) {
    return undefined;
  }

  for (const item of tree) {
    if (predicate(item)) {
      return item;
    }
    if (item.children?.length > 0) {
      const result = find(item.children, predicate);
      if (result) {
        return result;
      }
    }
  }

  return undefined;
};

/**
 * 树遍历。深度优先
 * @param {Array} tree
 * @param {Function} callbackfn
 */
export const traverse = (tree, callbackfn) => {
  if (!Array.isArray(tree)) {
    return;
  }

  for (const item of tree) {
    callbackfn(item);
    if (item.children?.length > 0) {
      traverse(item.children, callbackfn);
    }
  }
};
