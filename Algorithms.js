// Binary Search

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  let bigO = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // Check if target is present at mid
    if (array[mid] === target) {
      bigO++;
      return console.log(
        `Element ${target} found at index ${mid}. and big O is: ${bigO}`
      );
    }

    // If target is greater, ignore left half
    if (array[mid] < target) {
      bigO++;
      left = mid + 1;
    } else {
      // If target is smaller, ignore right half
      bigO++;
      right = mid - 1;
    }
  }

  return console.log(`Element ${target} not found in the array.`);
}

const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 14;
binarySearch(arr, target);
