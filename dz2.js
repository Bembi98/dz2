const makeObjectDeepCopy = (obj) => {
  const clone = {};
  for (const i in obj) {
    if (obj[i] != null && typeof obj[i] == "object")
      clone[i] = makeObjectDeepCopy(obj[i]);
    else clone[i] = obj[i];
  }
  return clone;
};

const arr = [-10, 2, 5, 4, 7];
const selectFromInterval = (arr, iter1, iter2) => {
  if (
    typeof iter1 !== "number" ||
    typeof iter1 !== "number" ||
    !Array.isArray(arr)
  ) {
    throw new Error("Ошибка");
  }

  const interval = iter1 < iter2 ? [iter1, iter2] : [iter2, iter1];

  return arr.filter((item) => {
    if (typeof iter1 !== "number") {
      throw new Error("Ошибка");
    }

    return item >= interval[0] && item <= interval[1];
  });
};

let myIterable = {
  from: 1,
  to: 4,
};
myIterable[Symbol.iterator] = function () {
  let num1 = this.from;
  let num2 = this.to;
  if (typeof num1 !== "number" || typeof num1 !== "number" || num2 < num1) {
    throw new Error("Ошибка");
  }
  return {
    next() {
      if (num1 <= num2) {
        return {
          done: false,
          value: num1++,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
};
