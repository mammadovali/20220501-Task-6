// customMap

Array.prototype.customMap = function (callBackFunction) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callBackFunction(this[i], i, this));
  }
  return newArray;
};

// customMap check

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.customMap(function (element, index, array) {
//   return element * 2;
// });

// console.log(result);

//-------------------------------------------------------------------------

// customForEach

Array.prototype.customForEach = function (callBackFunction) {
  for (let i = 0; i < this.length; i++) {
    callBackFunction(this[i], i, this);
  }
};

// customForEach check

// const numbers2 = [10, 20, 30, 40, 50];

// const result2 = numbers2.customForEach(function (element, index, array) {
//   console.log("element:", element, "index: ", index, "array:", array);
// });

// console.log(result2);

//-------------------------------------------------------------------------

// customFilter

Array.prototype.customFilter = function (callBackFunction) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callBackFunction(this[i], i, this)) {
      newArray.push(callBackFunction(this[i], i, this));
    }
  }
  return newArray;
};

// customFilter check

// const numbers3 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// const result3 = numbers3.customFilter(function (element, index, array) {
//   if (element % 2 == 0) {
//     return element;
//   }
// });

// console.log(result3);

//-------------------------------------------------------------------------

// customReduce

Array.prototype.customReduce = function (callBackFunction, initialValue) {
  for (let i = 0; i < this.length; i++) {
    initialValue = callBackFunction(initialValue, this[i], i, this);
  }
  return initialValue;
};

// customReduce check

// const numbers4 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// const result = numbers4.customReduce(function (prev, curr) {
//   return prev + curr;
// }, 50);

// console.log(result);

//-------------------------------------------------------------------------

// customSome

Array.prototype.customSome = function (callBackFunction) {
  for (let i = 0; i < this.length; i++) {
    if (callBackFunction(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

//customSome check

// const numbers5 = [1, 5, 7, 9, 17, 23, 45, 56, 65];

// const result = numbers5.customSome((element) => element % 17 == 0);

// console.log(result);

//-------------------------------------------------------------------------

// customEvery

Array.prototype.customEvery = function (callBackFunction) {
  for (let i = 0; i < this.length; i++) {
    if (!callBackFunction(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

// customEvery check

// const numbers5 = [5, 10, 15, 20, 25, 30, 35, 41];

// const result = numbers5.customEvery((element) => element % 5 == 0);

// console.log(result);
