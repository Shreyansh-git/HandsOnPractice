let arr = [1, 2, 3, 4, 5];

const callb = (ar) => {
  return ar + 1;
};

Array.prototype.myMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
};
const res = arr.map(callb);
const res2 = arr.myMap(callb);
console.log(res);
console.log(res2);
