let arr = [1, 2, 3, 4, 5];

const callb = (acc, curr) => {
  return (acc += curr);
};

Array.prototype.MyReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator) {
      accumulator = callback.call(undefined, accumulator, this[i], i);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

console.log(arr.reduce(callb, 0));
console.log(arr.MyReduce(callb, 0));
