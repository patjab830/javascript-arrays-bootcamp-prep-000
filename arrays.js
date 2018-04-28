var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, element) {
  var result = [element, ...arr];
  return result;
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  arr.unshift(element); // 
  return arr;
}

function addElementToEndOfArray(arr, element) {
  var result = [...arr, element];
  return result;
}

function destructivelyAddElementToEndOfArray(arr, element) {
  return arr.push(element);
}

function accessElementInArray(arr, index) {
 return arr[index]; 
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  var result = arr.shift; // returns the removed element
  return result;
}

function removeElementFromBeginningOfArray(arr) {
  var result = arr.slice(1); // returns the slice
  return result;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop(); // returns removed element
  return arr;
}

function removeElementFromEndOfArray(arr) {
  var result = arr.slice(0, arr.length - 1);
  return result;
}

// but we didn't use splice() -- returns removed items