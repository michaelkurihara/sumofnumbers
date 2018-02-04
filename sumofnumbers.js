const testList1 = [1, 2, 4, 5]; // Equals 12
const testList2 = [2, 4, 6, 8]; // Equals 20
const testList3 = [1, 3, 5, 7]; // Equals 16

function sumFor(numList) {
  let total = 0;
  for (const num of numList) {
    total += num;
  }
  return total;
}

console.log('sumFor Tests');
console.log(sumFor(testList1));
console.log(sumFor(testList2));
console.log(sumFor(testList3));


function sumWhile(numList) {
  let total = 0;
  let index = 0;
  while (index < numList.length) {
    total += numList[index];
    index++;
  }
  return total;
}

console.log('sumWhile Tests');
console.log(sumWhile(testList1));
console.log(sumWhile(testList2));
console.log(sumWhile(testList3));


// function sumRecursion(numList) {
//   if (numList.length === 0) {
//     return 0;
//   }
//   const tempList = numList.slice();
//   const num = tempList.pop();
//   return num + (sumRecursion(tempList));
// }

function sumRecursion(numList) {
  if (numList.length === 0) {
    return 0;
  }
  return numList[0] + sumRecursion(numList.slice(1, numList.length));
}

console.log('sumRecursion Tests');
console.log(sumRecursion(testList1));
console.log(sumRecursion(testList2));
console.log(sumRecursion(testList3));


function sumTheSimpleWay(numList) {
  return _.reduce(numList, (sum, num) => sum + num);
}

console.log('sumTheSimpleWay Tests');
console.log(sumTheSimpleWay(testList1));
console.log(sumTheSimpleWay(testList2));
console.log(sumTheSimpleWay(testList3));
