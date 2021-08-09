/**
 * 将时间格式化成期望的格式
 * @param {*} format 要格式化的字符串，格式 yyy-MM-dd HH:mm:ss
 * @param {number | string | Date} time 能被 new Date() 正确解析的代表时间的值
 */
export function formatTime(format, time) {
  if (!time) {
    return '';
  }

  const d = new Date(time);
  const yyyy = d.getFullYear() + '';
  const MM = (d.getMonth() + 1 + '').padStart(2, '0');
  const dd = (d.getDate() + '').padStart(2, '0');
  const HH = (d.getHours() + '').padStart(2, '0');
  const mm = (d.getMinutes() + '').padStart(2, '0');
  const ss = (d.getSeconds() + '').padStart(2, '0');

  return format
    .replace('yyyy', yyyy)
    .replace('MM', MM)
    .replace('dd', dd)
    .replace('HH', HH)
    .replace('mm', mm)
    .replace('ss', ss);
}

/**
 * 将时间格式化成 yyy-MM-dd
 * @param {number | string | Date} time 能被 new Date() 正确解析的代表时间的值
 */
export function formatTimeToDate(time) {
  return formatTime('yyyy-MM-dd', time);
}

/**
 * 将时间格式化成 yyy-MM-dd HH:mm
 * @param {number | string | Date} time 能被 new Date() 正确解析的代表时间的值
 */
export function formatTimeToMinutes(time) {
  return formatTime('yyyy-MM-dd HH:mm', time);
}

/**
 * 将时间格式化成 yyy-MM-dd HH:mm:ss
 * @param {number | string | Date} time 能被 new Date() 正确解析的代表时间的值
 */
export function formatTimeToSeconds(time) {
  return formatTime('yyyy-MM-dd HH:mm:ss', time);
}
