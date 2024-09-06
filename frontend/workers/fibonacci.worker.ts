import { fibonacci } from "@/lib/fibonacci";
import { useWorkerRuntime } from "@/lib/worker-task";

export type FibonacciWorkerMessage = { length: number };
export type FibonacciWorkerResult = number[];

useWorkerRuntime<FibonacciWorkerMessage, FibonacciWorkerResult>(
  ({ length }) => {
    if (isNaN(length) || length < 0) {
      throw new RangeError("invalid length value");
    }
    return new Promise((res) =>
      setTimeout(() => res(fibonacci(length)), 10000)
    );
  },
);
