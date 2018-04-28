function addElementToBeginningOfArray(arr, element) {
  var result = [element, ...arr];
  return result;
}

function destructivelyAddElementToBeginningofArray(arr, element) {
  return arr.unshift(element);
}

function accessElementInArray(arr, index) {
 return arr[index]; 
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  return arr.shift();
}

