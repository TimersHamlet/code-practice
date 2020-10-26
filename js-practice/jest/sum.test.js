/*
 * @Description: This is a unitTest
 * @Version: 1.0
 * @Author: timershamlet
 * @Date: 2020-09-30 14:59:43
 * @LastEditors: timershamlet
 * @LastEditTime: 2020-09-30 15:47:03
 */
import sum from './practice';
/**toBe Matchers */
test('1+2=3', () => {
  expect(sum(1, 2)).toBe(3);
});
/**toEqual Matchers */
test('this is a toEqual Matchers test', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
/**toBe opposite Matchers */
test('adding positive numbers is not zero', () => {
  for (let a = 0; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
/**truthiness test
 * toBeNull/toBeUndefined/toBeDefined/toBeTruthy/toBeFalsy
 */
test('null test', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).not.toBeUndefined();
  expect(n).toBeDefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});
