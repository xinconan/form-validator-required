import { getTrimValue, isEmptyValue, isEmptyValueStrict } from '../util';

describe('test utils', () => {
  test('isEmptyValue', () => {
    expect(isEmptyValue(null)).toBeTruthy();
    expect(isEmptyValue('')).toBeTruthy;
  });

  test('isEmptyValueStrict', () => {
    expect(isEmptyValueStrict('')).toBeTruthy();
    expect(isEmptyValueStrict(' ')).toBeTruthy();
    // 全角空格
    expect(isEmptyValueStrict('　')).toBeTruthy();
    expect(isEmptyValueStrict('　x')).toBeFalsy();
  });

  test('getTrimValue', () => {
    expect(getTrimValue(' ')).toBe('');
    // 全角空格
    expect(getTrimValue('　')).toBe('');
    expect(getTrimValue('　x')).toBe('x');
    expect(getTrimValue('x　')).toBe('x');
  });
});
