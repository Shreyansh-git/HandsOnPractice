let arr = [1, 2, 3, 4, 5];

const callb = (ar) => ar > 2;

Array.prototype.MyFilter = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i)) result.push(this[i], i);
  }
  return result;
};

const res = arr.filter(callb);
const res2 = arr.MyFilter(callb);
console.log(res);
console.log(res2);
