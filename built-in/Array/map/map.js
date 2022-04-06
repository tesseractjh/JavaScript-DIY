const myMap = function (callback, thisArg) {
  const array = [];
  for (const key in this) {
    const intKey = Number(key);
    if (Number.isInteger(intKey)) {
      array[key] = callback.bind(thisArg)(this[key], intKey, this);
    }
  }
  return array;
};

module.exports = myMap;