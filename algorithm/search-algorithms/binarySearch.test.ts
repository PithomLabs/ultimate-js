import {binarySearch} from "./binarySearch";

it('binarySearch', async () => {
    let res = binarySearch([2, 3, 1, 6, 9, 8, 10, 5, 4, 7], 7)
    expect(res).toBeTruthy()
    res = binarySearch([2, 3, 1, 6, 9, 8, 10, 5, 4, 7], 20)
    expect(res).toBeFalsy()
});
