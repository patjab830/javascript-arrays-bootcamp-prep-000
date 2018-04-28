function addElementToBeginningOfArray(arr, element) {
  var result = [element, ...arr];
  return result;
}

function destructivelyAddElementToBeginningofArray(arr, element) {
  return arr.unshift(element);
}