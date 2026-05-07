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
