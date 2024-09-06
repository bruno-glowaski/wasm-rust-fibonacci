"use client";

const MIN_LENGTH = 0;

import { FormEvent } from "react";
import SequenceItem from "./SequenceItem";
import { useWorker } from "@/lib/hooks/useWorker";
import { WorkerConfig } from "@/types/workers";
import {
  FibonacciWorkerMessage,
  FibonacciWorkerResult,
} from "@/workers/fibonacci.worker";

export default function FibonacciGenerator() {
  const { status, data, error, start, cancel } = useWorker<
    FibonacciWorkerMessage,
    FibonacciWorkerResult
  >(
    new WorkerConfig(
      new URL("../workers/fibonacci.worker.ts", import.meta.url),
      { name: "fibonacci" },
    ),
  );

  const generate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "working") return;
    const formData = new FormData(e.currentTarget);
    const length = Math.max(
      MIN_LENGTH,
      parseInt(formData.get("length") as string ?? "0"),
    );
    const method = formData.get("method") as "js" | "rs";
    start({ length, method });
  };

  const cancelTask = () => {
    (cancel!)();
  };

  return (
    <main className="flex flex-col items-stretch gap-8">
      <form
        className="border border-slate-700 rounded p-8 flex flex-col gap-4"
        onSubmit={generate}
      >
        <label className="flex flex-col gap-1">
          <span className="text-xs">Sequence length:</span>
          <input
            className="border border-slate-800 rounded-md p-2 bg-slate-50 text-slate-900"
            name="length"
            min="1"
            type="number"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-xs">Method:</span>
          <select
            className="border border-slate-800 rounded-md p-2 bg-slate-50 text-slate-900"
            name="method"
          >
            <option value="js">JavaScript</option>
            <option value="rs">Rust</option>
          </select>
        </label>
        <button
          disabled={status === "working"}
          className="border border-green-500 rounded p-2 bg-green-800 hover:bg-green-700 active:bg-green-600 disabled:bg-green-950 disabled:border-green-700"
        >
          Generate
        </button>
        <button
          disabled={status !== "working"}
          type="button"
          className="border border-red-500 rounded p-2 bg-red-800 hover:bg-red-700 active:bg-red-600 disabled:bg-red-950 disabled:border-red-700"
          onClick={cancelTask}
        >
          Cancel
        </button>
      </form>
      <figure className="border border-slate-700 rounded p-8 flex flex-row flex-wrap gap-4">
        {status === "idle" && (
          <figcaption className="flex-1 text-white text-opacity-50 h-16 flex justify-center items-center">
            Generate a sequence first...
          </figcaption>
        )}
        {status === "working" && (
          <figcaption className="flex-1 text-white text-opacity-50 h-16 flex justify-center items-center">
            In progress...
          </figcaption>
        )}
        {status === "success" && data.map(
          (value, i) => <SequenceItem key={i} index={i} value={value} />,
        )}
        {status === "error" && (
          <figcaption className="flex-1 text-white text-opacity-50 h-16 flex justify-center items-center">
            An error has occurred: {`${error}`}
          </figcaption>
        )}
        {status === "cancelled" && (
          <figcaption className="flex-1 text-white text-opacity-50 h-16 flex justify-center items-center">
            Task cancelled...
          </figcaption>
        )}
      </figure>
    </main>
  );
}
