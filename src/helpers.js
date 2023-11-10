/**Helper function used in JobCard to format the salary amount */
function addCommasToIntegerPart(integerPart) {
  let strinInt = String(integerPart);
  let result = '';
  let length = strinInt.length;

  for (let i = length - 1; i >= 0; i--) {
    let position = length - 1 - i;

    if (position > 0 && position % 3 === 0) {
      result = ',' + result;
    }

    result = strinInt[i] + result;
  }
  return ` $${result}`;
}

export {addCommasToIntegerPart}