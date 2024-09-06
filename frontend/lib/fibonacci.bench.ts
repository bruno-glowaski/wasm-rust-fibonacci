import { benchmarkSuite } from "jest-bench";

import { fibonacci } from "./fibonacci";

benchmarkSuite("fibonacci strategies", {
  ["JavaScript (100 items)"]() {
    fibonacci(100);
  },
  ["JavaScript (1000 items)"]() {
    fibonacci(1000);
  },
});
