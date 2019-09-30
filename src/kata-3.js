export function kata3 (n, m) {
    return  getNumbersToTest(n, m)
            .map((number) => squareDivisorsSumIsASquare(number, getSquareDivisorsSum(number)))
            .filter((item) => item !== null)
}

const getNumbersToTest = (startNumber, lastNumber) => {
  var totalNumbers = (lastNumber - startNumber) + 1;
  var totalNumbersArray = Array(totalNumbers);
  return totalNumbersArray.fill().map((item, index) => startNumber + index);
}

const getSquareDivisorsSum = (number) => {
  const possibleDivisors = [...Array(number + 1).keys()].slice(1);
  return possibleDivisors.reduce((sum, possibleDivisor) => {
    const squareDivisor = !(number % possibleDivisor) && (possibleDivisor * possibleDivisor);

    return sum + squareDivisor;
  }, 0)
}

const squareDivisorsSumIsASquare = (number, squareDivisorsSum) => squareDivisorsSum % Math.sqrt(squareDivisorsSum) === 0 ? [number, squareDivisorsSum] : null;