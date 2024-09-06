import { fibonacci } from "./fibonacci";

describe("fibonacci()", () => {
  it("returns the 20 first correct numbers in the fibonacci sequence", () => {
    const expected = [
      0n,
      1n,
      1n,
      2n,
      3n,
      5n,
      8n,
      13n,
      21n,
      34n,
      55n,
      89n,
      144n,
      233n,
      377n,
      610n,
      987n,
      1597n,
      2584n,
      4181n,
    ];
    expect(fibonacci(expected.length)).toStrictEqual(expected);
  });
});
