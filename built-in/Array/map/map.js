const myMap = function (callback, thisArg) {
  const array = [];
  const iter = Object.entries(this);
  for (const [key, value] of iter) {
    array[key] = callback.bind(thisArg)(value, Number(key), this);
  }
  return array;
};

Array.prototype.myMap = myMap;

module.exports = myMap;