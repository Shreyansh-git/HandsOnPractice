function add(a, b) {
  return a + b + this.c;
}
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

Function.prototype.MyCall = function (Obj, ...args) {
  Obj.myFunction = this;
  return Obj.myFunction(...args);
};

const newAdd = add.call(obj, 5, 7);
const newAdd2 = add.MyCall(obj, 5, 7);
console.log(newAdd);
console.log(newAdd2);
