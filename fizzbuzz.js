module.exports = function () {
  function fizzbuzz() {
  const result = [];

  for (let number = 1; number <= 100; number++) {
      let entry = (number % 3 === 0 ? "Fizz" : "") + (number % 5 === 0 ? "Buzz" : "") || number;
      result.push(entry);
  }

  return result;
}

console.log(fizzbuzz());


};
