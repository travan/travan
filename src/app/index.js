// function bulbs(numb) {
//   const result = [];
//   for (let i = 1; i * i <= numb; i++) {
//     result.push(i * i);
//   }
//   return result;
// }

// const res = bulbs(10);
// console.log(res);

// function rotateArr(arr, start) {
//   const length = arr.length;
//   if (length === 0) return arr;
//   start = start % length;
//   const result = [...arr.slice(-start), ...arr.slice(0, length - start)];
//   return result;
// }

// const res1 = rotateArr([1, 2, 3, 4, 5], 2);
// console.log(res1);

// function bulbs(arr) {
//   let count = 0,
//     max = 0,
//     maxStreak = 0;
//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     max = Math.max(element, max);
//     if (max === index + 1) {
//       count++;
//       maxStreak = Math.max(count, maxStreak);
//       console.log("max streak", maxStreak);
//     } else {
//       count = 0;
//     }
//   }

//   return maxStreak;
// }

// console.log(bulbs([2, 1, 3, 5, 4])); // 2
// console.log(bulbs([1, 2, 3, 4, 5])); // 5
// console.log(bulbs([3, 2, 4, 1, 5])); // 1
// console.log(bulbs([1, 3, 2, 4, 6, 5, 7])); // 3 (streak: index 4,5,6)

//sliding window
// function getLongSubArray(arr) {
//   let left = 0,
//     count = 0,
//     maxDis = 0;
//   const subArr = new Set();
//   for (let right = 0; right < arr.length; right++) {
//     left = right + 1;
//     if (arr[left] > arr[right] + 1) {
//       subArr.push(arr[right])
//       maxDis = Math.max(count, maxDis);
//     } else {
//       count = 0;
//     }
//   }
//   return maxDis + 1;
// }

// function getLongSubArray(arr) {
//   let set = new Set();
//   let left = 0;
//   let maxLen = 0;

//   for (let right = 0; right < arr.length; right++) {
//     console.log("right", set.has(arr[right]));
//     while (set.has(arr[right])) {
//       set.delete(arr[left]);
//       console.log("left", set);
//       left++;
//     }
//     set.add(arr[right]);
//     maxLen = Math.max(maxLen, right - left + 1);
//   }

//   return maxLen;
// }

// console.log(getLongSubArray([1, 2, 3, 1, 2, 3, 4, 5])); // ✅ 5
// console.log(getLongSubArray([5, 1, 3, 5, 2, 3, 4, 1])); // ✅ 5
// console.log(getLongSubArray([1, 2, 3, 4, 5])); // ✅ 5
// console.log(getLongSubArray([1, 1, 1, 1]));

function getMinTimesSwap(arr) {
  const totalOnes = arr.filter((e) => e === 1).length;
  let maxOneInWindow = 0,
    left = 0,
    count = 0;

  for (let index = 0; index < totalOnes; index++) {
    if (arr[index] === 1) {
      count++;
    }
  }

  maxOneInWindow = count;

  for (let index = totalOnes; index < arr.length; index++) {
    if (arr[index - totalOnes] === 1) count--;
    if (arr[index] === 1) count++;
    maxOneInWindow = Math.max(count, maxOneInWindow);
  }

  return totalOnes - maxOneInWindow;
}

console.log(getMinTimesSwap([1, 0, 1, 0, 1]));       // ✅ 1
console.log(getMinTimesSwap([1, 0, 1, 0, 1, 0, 1])); // ✅ 2
console.log(getMinTimesSwap([1, 1, 1, 1]));          // ✅ 0
console.log(getMinTimesSwap([0, 0, 0, 0]));
