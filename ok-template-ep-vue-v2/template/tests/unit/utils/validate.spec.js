import { isEmail, isPhone } from '@/utils/validate';

describe('validate.js', () => {
  it('isEmail', () => {
    expect(isEmail('1234@qq.com')).toBe(true);
    expect(isEmail('wang@126.com')).toBe(true);
    expect(isEmail('wang123@126.com')).toBe(true);
    expect(isEmail('wang123@vip.163.com')).toBe(true);
    expect(isEmail('wang_email@outlook.com')).toBe(true);
    expect(isEmail('wang.email@gmail.com')).toBe(true);

    expect(isEmail('1231323')).toBe(false);
    expect(isEmail('1231323@qq')).toBe(false);
    expect(isEmail('@qq.com')).toBe(false);
  });

  it('isPhone', () => {
    expect(isPhone('13287653463')).toBe(true);

    expect(isPhone('werqwer')).toBe(false);
    expect(isPhone('1323234324')).toBe(false);
  });
});
