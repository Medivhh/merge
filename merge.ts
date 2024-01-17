function mergeArrays(collection1: number[], collection2: number[]): number[] {
  const mergedArray: number[] = [];
  let i = 0;
  let j = 0;

  while (i < collection1.length && j < collection2.length) {
    if (collection1[i] < collection2[j]) {
      mergedArray.push(collection1[i]);
      i++;
    } else {
      mergedArray.push(collection2[j]);
      j++;
    }
  }

  while (i < collection1.length) {
    mergedArray.push(collection1[i]);
    i++;
  }

  while (j < collection2.length) {
    mergedArray.push(collection2[j]);
    j++;
  }

  return mergedArray;
}

// Example usage:
const collection_1 = [1, 3, 5, 7];
const collection_2 = [2, 4, 6, 8, 10];

const mergedArray = mergeArrays(collection_1, collection_2);
console.log(mergedArray);
