// Problem - 01
function filterEvenNumbers(numbers: number[]) {
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  console.log(evenNumbers);
}
filterEvenNumbers([1, 2, 3, 4, 5, 6]);

// Problem - 02
function reverseString(input: string) {
  let reverse = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reverse += input[i];
  }
  console.log(reverse);
}

reverseString("typescript");

// Problem - 03
type StringOrNumber = string | number;
function checkType(input: StringOrNumber) {
  if (typeof input === "number") {
    console.log("Number");
  } else if (typeof input === "string") {
    console.log("String");
  }
}
checkType("Hello");
checkType(42);

// Problem - 04
const getProperty = <T, K extends keyof T>(obj: T, key: K): void => {
  console.log(obj[key]);
};
const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");
