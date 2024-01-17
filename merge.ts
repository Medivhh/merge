export default function mergeArrays(
  collection1: number[],
  collection2: number[]
): number[] {
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
