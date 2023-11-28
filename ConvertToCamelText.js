function toCamelCase(str) {
  if (str === "") return str;
  const Camel = str
    .split("-")
    .map((entry) =>
      entry
        .split("_")
        .map(
          (entry) => `${entry[0].toUpperCase()}${entry.slice(1, entry.length)}`
        )
        .join("")
    )
    .join("");
  return `${str[0]}${Camel.slice(1, Camel.length)}`;
}

console.log(toCamelCase("the-stealth_warrior"));
console.log(toCamelCase("The-stealth_warrior"));
