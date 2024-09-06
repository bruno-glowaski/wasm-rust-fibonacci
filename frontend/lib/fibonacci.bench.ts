import { benchmarkSuite } from "jest-bench";

import { fibonacci, fibonacciNaive } from "./fibonacci";

benchmarkSuite("fibonacci strategies", {
  ["Naive (10 items)"]() {
    Array.from({ length: 10 }, (_, i) => fibonacciNaive(i));
  },
  ["Memoised (10 items)"]() {
    const memo = {};
    Array.from({ length: 10 }, (_, i) => fibonacci(i, memo));
  },
  ["Naive (100 items)"]() {
    Array.from({ length: 100 }, (_, i) => fibonacciNaive(i));
  },
  ["Memoised (100 items)"]() {
    const memo = {};
    Array.from({ length: 100 }, (_, i) => fibonacci(i, memo));
  },
});
