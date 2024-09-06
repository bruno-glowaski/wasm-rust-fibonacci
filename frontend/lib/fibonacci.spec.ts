import { fibonacci } from "./fibonacci";

describe("fibonacci()", () => {
  it("returns `0` when `index` == `0`", () => {
    expect(fibonacci(0)).toBe(0);
  });

  it("returns `1` when `index` == `1` or `index` == `2`", () => {
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
  });

  it("returns the 20 first correct numbers in the fibonacci sequence", () => {
    const expected = [
      0,
      1,
      1,
      2,
      3,
      5,
      8,
      13,
      21,
      34,
      55,
      89,
      144,
      233,
      377,
      610,
      987,
      1597,
      2584,
      4181,
    ];
    expect(expected.map((_, i) => fibonacci(i))).toStrictEqual(expected);
  });
});
