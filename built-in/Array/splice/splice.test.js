const mySplice = require('./splice');

Array.prototype.mySplice = mySplice;

test('Array.prototype.splice 테스트', () => {
  const starts = [undefined, -3, -2, -1, 0, 1, 2, 3, 4, 5, 'foo'];
  const deleteCounts = [undefined, -1, 0, 1, 2, 3, 4, 5, 6, 'foo'];
  const itemLists = [[], [0], [6, 7, 8, 9, 10], [false, undefined, 'foo', [], {}]];
  starts.forEach(start => {
    deleteCounts.forEach(deleteCount => {
      itemLists.forEach(items => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [1, 2, 3, 4, 5];
        expect(arr1.mySplice(start, deleteCount, ...items))
          .toEqual(arr2.splice(start, deleteCount, ...items));
        expect(arr1).toEqual(arr2);
      });
    });
  });
});