import { formatTime } from '@/utils/time';

describe('time.js', () => {
  it('format to yyy-MM', () => {
    const timeStr = formatTime('yyyy-MM', 1604462585919);
    expect(timeStr).toMatch('2020-11');
  });

  it('format to yyy-MM-dd', () => {
    const timeStr = formatTime('yyyy-MM-dd', 1604462585919);
    expect(timeStr).toMatch('2020-11-04');
  });

  it('format to yyy/MM/dd', () => {
    const timeStr = formatTime('yyyy/MM/dd', 1604462585919);
    expect(timeStr).toMatch('2020/11/04');
  });

  it('format to yyy-MM-dd HH:mm', () => {
    const timeStr = formatTime('yyyy-MM-dd HH:mm', 1604462585919);
    expect(timeStr).toMatch('2020-11-04 12:03');
  });

  it('format to yyy-MM-dd HH:mm:ss', () => {
    const timeStr = formatTime('yyyy-MM-dd HH:mm:ss', 1604462585919);
    expect(timeStr).toMatch('2020-11-04 12:03:05');
  });

  it('format string to yyy-MM-dd HH:mm:ss', () => {
    const timeStr = formatTime('yyyy-MM-dd HH:mm:ss', '2018-08-09T18:25:54');
    expect(timeStr).toMatch('2018-08-09 18:25:54');
  });
});
