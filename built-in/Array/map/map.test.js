const myMap = require('./map');

Array.prototype.myMap = myMap;

describe('Array.prototype.map 테스트', () => {
  [
    ['value 테스트 1', v => v],
    ['value 테스트 2', v => typeof v],
    ['index 테스트 1', (_, i) => i],
    ['index 테스트 2', (_, i) => typeof i]
  ].forEach(([testName, callback]) => {
    test(testName, () => {
      const arr = [1, 2, 3, 4, 5];
      expect(arr.myMap(callback)).toEqual(arr.map(callback));
    });
  });

  test('array 테스트', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr.myMap((_, __, array) => array).every(value => value === arr))
      .toBe(true);
  });

  test('희소 배열 테스트', () => {
    const arr = [1, , 2, , 3];
    expect(arr.myMap(v => v)).toEqual(arr.map(v => v));
    expect(arr.myMap((_, i) => i)).toEqual(arr.map((_, i) => i));
  });

  test('thisArg 테스트', () => {
    const arr = [1, 2, 3, 4, 5];
    const obj = {
      sum: 0,
      callback(value) {
        this.sum += value;
      }
    };
    arr.map(obj.callback, obj);
    expect(obj.sum).toBe(15);
  });
});
