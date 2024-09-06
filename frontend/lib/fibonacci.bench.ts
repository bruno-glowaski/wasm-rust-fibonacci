import { benchmarkSuite } from "jest-bench";

import { fibonacci } from "./fibonacci";

function createSuiteSet(itemCount: number): Record<string, () => void> {
  return {
    [`JavaScript (${itemCount}) items`]() {
      fibonacci(itemCount);
    },
  };
}

benchmarkSuite("fibonacci strategies", {
  ...createSuiteSet(1000),
  ...createSuiteSet(10000),
});
