
const arrayToSort = [5, 2, 8, 1, 9, 3];
function sortArray(array) {
  return array.slice().sort((a, b) => a - b);
}
const sortedArray = sortArray(arrayToSort);
console.log("Original Array:", arrayToSort);
console.log("Sorted Array:", sortedArray);
