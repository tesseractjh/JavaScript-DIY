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

  [
    [
      '순회 중 추가된 배열 요소 테스트',
      (v, i, array) => {
        array.push(0);
        return v;
      }
    ],
    [
      '순회 중 배열 요소 변경 테스트', 
      (v, i, array) => {
        array[i + 2] = 0;
        return v;
      }
    ],
    [
      '순회 중 배열 요소 삭제 테스트', 
      (v, i, array) => {
        delete array[i + 2];
        return v;
      }
    ]
  ].forEach(([testName, callback]) => {
    test(testName, () => {
      const arr1 = [1, 2, 3, 4, 5];
      const arr2 = [1, 2, 3, 4, 5];
      expect(arr1.myMap(callback))
       .toEqual(arr2.map(callback));
    });
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
