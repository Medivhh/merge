import merge from "./merge";

describe("merge arrays function", () => {
  it("merge 2 sorted arrays", () => {
    const array1 = [1, 3, 5, 7, 9];
    const array2 = [2, 4, 6, 8, 10];
    const result = merge(array1, array2);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("merge with empty arrays", () => {
    const array1: number[] = [];
    const array2 = [2, 4, 6, 8, 10];
    const result = merge(array1, array2);

    expect(result).toEqual([2, 4, 6, 8, 10]);
  });

  it("merge 2 empty array ", () => {
    const array1: number[] = [];
    const array2: number[] = [];
    const result = merge(array1, array2);

    expect(result).toEqual([]);
  });
  it("merge 2  arrays  with duplicate elements", () => {
    const array1 = [2, 4, 6, 8, 10];
    const array2 = [2, 4, 6, 8, 10];
    const result = merge(array1, array2);

    expect(result).toEqual([2, 4, 6, 8, 10]);
  });
});
