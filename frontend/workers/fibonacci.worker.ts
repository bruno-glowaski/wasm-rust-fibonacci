import { fibonacci as fibonacciJs } from "@/lib/fibonacci";
import { useWorkerRuntime } from "@/lib/worker-task";

export type FibonacciWorkerMessage = { length: number; method: "js" | "rs" };
export type FibonacciWorkerResult = bigint[];

useWorkerRuntime<FibonacciWorkerMessage, FibonacciWorkerResult>(
  async ({ length, method }) => {
    if (isNaN(length) || length < 0) {
      throw new RangeError("invalid length value");
    }
    switch (method) {
      case "js":
        return fibonacciJs(length);
      case "rs":
        const { fibonacci: fibonacciRs } = await import("fibonacci-rust");
        return fibonacciRs(length);
    }
  },
);
