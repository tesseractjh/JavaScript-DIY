const mySplice = function (start, deleteCount, ...items) {
  const deletedArray = [];
  const startIndex = Number.isInteger(Number(start))
    ? start < 0
    ? this.length + Number(start)
    : Number(start)
    : 0;
  const count = (Number.isInteger(Number(deleteCount)) && deleteCount > 0)
    ? Number(deleteCount)
    : 0;
  const endIndex = Math.min(startIndex + count, this.length);
  
  if (count) {
    for (let i = startIndex; i < endIndex; i++) {
      deletedArray[i - startIndex] = this[i];
    }
    for (let i = startIndex; i < this.length; i++) {
      this[i] = this[i + count];
    }
    this.length -= endIndex - startIndex;
  }

  if (items.length) {
    for (let i = this.length - 1; i >= startIndex; i--) {
      this[i + items.length] = this[i];
    }
    for (let i = 0; i < items.length; i++) {
      this[startIndex + i] = items[i];
    }
  }
  return deletedArray;
};

module.exports = mySplice;