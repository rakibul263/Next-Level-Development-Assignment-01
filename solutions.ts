// Problem - 01
function filterEvenNumbers(numbers: number[]) {
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  console.log(evenNumbers);
}
filterEvenNumbers([1, 2, 3, 4, 5, 6]);
