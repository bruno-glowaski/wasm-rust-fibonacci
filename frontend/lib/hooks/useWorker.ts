import { WorkerConfig, WorkerResult } from "@/types/workers";
import { useState } from "react";

export type UseWorkerIdle<TMessage> = {
  status: "idle";
  data: undefined;
  error: undefined;
  cancel: undefined;
  start(message: TMessage): void;
};

export type UseWorkerWorking = {
  status: "working";
  data: undefined;
  error: undefined;
  cancel: () => void;
  start: undefined;
};

export type UseWorkerSuccess<TMessage, TData> = {
  status: "success";
  data: TData;
  error: undefined;
  cancel: () => void;
  start(message: TMessage): void;
};

export type UseWorkerError<TMessage, TError> = {
  status: "error";
  data: undefined;
  error: TError;
  cancel: () => void;
  start(message: TMessage): void;
};

export type UseWorkerCancelled<TMessage> = {
  status: "cancelled";
  data: undefined;
  error: undefined;
  cancel: undefined;
  start(message: TMessage): void;
};

export type UseWorker<TMessage, TData, TError = unknown> =
  | UseWorkerIdle<TMessage>
  | UseWorkerWorking
  | UseWorkerSuccess<TMessage, TData>
  | UseWorkerError<TMessage, TError>
  | UseWorkerCancelled<TMessage>;

export function useWorker<TMessage, TData, TError = unknown>(
  config: WorkerConfig,
) {
  const [currentWorker, setCurrentWorker] = useState<Worker | null>(null);
  const [status, setStatus] = useState<
    UseWorker<TMessage, TData, TData>["status"]
  >("idle");
  const [data, setData] = useState<TData | undefined>();
  const [error, setError] = useState<TError | undefined>();

  const onMessage = (e: MessageEvent<WorkerResult<TData, TError>>) => {
    switch (e.data.success) {
      case true:
        setData(e.data.data);
        setStatus("success");
        break;
      case false:
        setError(e.data.error);
        setStatus("error");
        break;
    }
  };

  const createWorker = () => {
    const worker = new Worker(
      config.url,
      config.options,
    );
    worker.addEventListener("message", onMessage);
    return worker;
  };

  const start = (message: TMessage) => {
    const worker = currentWorker ?? createWorker();
    setCurrentWorker(worker);
    worker.postMessage(message);
    setStatus("working");
  };

  const cancel = () => {
    setStatus("cancelled");
    setCurrentWorker((worker) => {
      worker?.terminate();
      return null;
    });
  };

  return {
    status,
    data,
    error,
    start,
    cancel,
  } as UseWorker<TMessage, TData, TError>;
}
