Function.prototype.MyApply = function (context = {}, args = []) {
  if (!Array.isArray(args)) {
    throw new Error("Array is required as parameter");
  }
  if (typeof this !== "function") {
    throw new Error("Not a function");
  }
  context.myFn = this;
  return context.myFn(...args);
};
