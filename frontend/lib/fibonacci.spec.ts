import { flowToPromise } from "@/lib/utils/flow";

import { fibonacci } from "./fibonacci";

describe("fibonacci()", () => {
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
    expect(fibonacci(expected.length)).toStrictEqual(expected);
  });
});
