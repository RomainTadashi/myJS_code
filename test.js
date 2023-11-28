const reverse = (str) =>
  str
    .split("")
    .reverse()
    .map((element) =>
      element.toUpperCase() === element
        ? element.toLowerCase()
        : element.toUpperCase()
    )
    .join("");
console.log(reverse(`ABCdeF4g`));
console.log(convert(`ABCdeF4g`));
const convert = function (str) {
  return str
    .split("")
    .reduce(
      (prev, curr) =>
        `${
          curr.toUpperCase() === curr ? curr.toLowerCase() : curr.toUpperCase()
        }${prev}`,
      ""
    );
};
