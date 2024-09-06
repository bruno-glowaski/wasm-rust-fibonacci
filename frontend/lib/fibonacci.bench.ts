import { benchmarkSuite } from "jest-bench";

import { fibonacci as fibonacciJs } from "./fibonacci";
import { fibonacci as fibonacciRs } from "fibonacci-rust";

function createSuiteSet(itemCount: number): Record<string, () => void> {
  return {
    [`JavaScript (${itemCount}) items`]() {
      fibonacciJs(itemCount);
    },
    [`Rust (${itemCount}) items`]() {
      fibonacciRs(itemCount);
    },
  };
}

benchmarkSuite("fibonacci strategies", {
  ...createSuiteSet(1000),
  ...createSuiteSet(10000),
  ...createSuiteSet(100000),
});
