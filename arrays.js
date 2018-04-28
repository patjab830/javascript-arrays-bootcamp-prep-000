var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, element) {
  var result = [element, ...arr];
  return result;
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  return arr.unshift(element);
}
addElementToEndOfArray

destructivelyAddElementToEndOfArray

function accessElementInArray(arr, index) {
 return arr[index]; 
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  return arr.shift();
}

function removeElementFromBeginningOfArray(arr) {
  var result = arr.slice(1);
  return result;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr) {
  arr.slice(0, arr.length - 1);
}