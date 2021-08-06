/**
 * 使元素可以被拖动的hooks
 * @param {number} initLeft 初始left值
 * @param {number} initTop 初始top值
 * @param {string} syncName 如果有syncName，会以 ${syncName}.left, ${syncName}.top 作为键名，同步 left，top 的值到localStorage
 */
export const useDrag = (initLeft = 0, initTop = 0, syncName = '') => {
  const left = !syncName
    ? initLeft
    : parseInt(localStorage.getItem(`${syncName}.left`) || initLeft, 10);
  const top = !syncName
    ? initTop
    : parseInt(localStorage.getItem(`${syncName}.top`) || initTop, 10);
  const style = {
    position: 'absolute',
    left: left + 'px',
    top: top + 'px',
    cursor: 'move',
  };
  let target = null;
  let mousedownLeft = 0;
  let mousedownTop = 0;
  let mousedownClientX = 0;
  let mousedownClientY = 0;

  const mousemove = (evt) => {
    if (target) {
      // 鼠标移动的距离
      const distanceX = evt.clientX - mousedownClientX;
      const distanceY = evt.clientY - mousedownClientY;

      const left = mousedownLeft + distanceX;
      const top = mousedownTop + distanceY;

      target.style.left = `${left}px`;
      target.style.top = `${top}px`;
    }
  };

  const mouseup = () => {
    if (target && syncName) {
      localStorage.setItem(
        `${syncName}.left`,
        parseInt(target.style.left, 10) || ''
      );
      localStorage.setItem(
        `${syncName}.top`,
        parseInt(target.style.top, 10) || ''
      );
    }

    target = null;
    window.removeEventListener('mousemove', mousemove);
    window.removeEventListener('mouseup', mouseup);
  };

  const mousedown = (evt) => {
    // console.log('mousedown', evt.target, evt.button) // 注意 evt.target 可能是内部元素，计算就不对了

    if (evt.button !== 0) {
      // 不是鼠标左键不处理
      return;
    }

    target = evt.target;
    mousedownLeft = parseInt('0' + evt.target.style.left, 10);
    mousedownTop = parseInt('0' + evt.target.style.top, 10);
    mousedownClientX = evt.clientX;
    mousedownClientY = evt.clientY;

    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);
  };

  return {
    mousedown,
    style,
  };
};
