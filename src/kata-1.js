export function kata1 (number) {
 return convertIntegerWithDigitsInDescendingOrder(number);
}

function convertIntegerWithDigitsInDescendingOrder(number) {
  const stringNumberWithDigitsOrdered = number.toString().split('').sort().reverse().join('');

  return parseInt(stringNumberWithDigitsOrdered) * Math.sign(number);
}

