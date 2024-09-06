import { fibonacci } from "@/lib/fibonacci";
import { useWorkerRuntime } from "@/lib/worker-task";

export type FibonacciWorkerMessage = { length: number };
export type FibonacciWorkerResult = bigint[];

useWorkerRuntime<FibonacciWorkerMessage, FibonacciWorkerResult>(
  ({ length }) => {
    if (isNaN(length) || length < 0) {
      throw new RangeError("invalid length value");
    }
    return fibonacci(length);
  },
);
