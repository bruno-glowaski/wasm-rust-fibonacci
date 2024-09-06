import { benchmarkSuite } from "jest-bench";

import { fibonacci } from "./fibonacci";

benchmarkSuite("fibonacci strategies", {
  ["Naive (10 items)"]() {
    Array.from({ length: 10 }, (_, i) => fibonacci(i));
  },
  ["Naive (50 items)"]() {
    Array.from({ length: 50 }, (_, i) => fibonacci(i));
  },
});
