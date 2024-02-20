// ------ Binary Search ------
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let bigO = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // Check if target is present at mid
    if (arr[mid] === target) {
      bigO++;
      return console.log(
        `Element ${target} found at index ${mid}. and big O is: ${bigO}`
      );
    }

    // If target is greater, ignore left half
    if (arr[mid] < target) {
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

// Example usage:
const binaryArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 14;

// binarySearch(binaryArray, target);

// ------ Selection Sort ------
function selectionSort(arr) {
  const n = arr.length;
  const sortedArray = [];

  // Traverse through all array elements
  for (let i = 0; i < n; i++) {
    // Find the minimum element in the remaining unsorted array
    let minIndex = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Push the minimum element to the sorted array and remove it from the original array
    sortedArray.push(arr[minIndex]);
    arr.splice(minIndex, 1);
  }

  return sortedArray;
}

// Example usage:
const arr = [64, 25, 12, 22, 11];
console.log("Original array:", arr);
console.log("Sorted array:", selectionSort(arr));
