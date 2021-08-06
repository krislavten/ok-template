class ErrorMessager {
  constructor() {
    this._messagerFn = undefined;
  }

  /**
   * 像屏幕发送错误消息
   * @param {string} msg 要显示的错误文字
   */
  send(msg) {
    if (typeof this._messagerFn === 'function') {
      this._messagerFn(msg);
    } else {
      console.error(
        'you should set a messager before call [send] method.\n msg: ' + msg
      );
    }
  }

  /**
   * 设置真正的发送函数
   * @param {Function} fn 真正的发送函数
   */
  setMessagerFunction(fn) {
    this._messagerFn = fn;
  }
}

export default new ErrorMessager();
