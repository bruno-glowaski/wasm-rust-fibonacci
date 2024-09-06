import { WorkerResultError, WorkerResultSuccess } from "@/types/workers";

export type WorkerTask<TMessage, TResult> = (
  message: TMessage,
) => TResult | PromiseLike<TResult>;

export function useWorkerRuntime<TMessage, TResult>(
  task: WorkerTask<TMessage, TResult>,
) {
  addEventListener("message", async (e: MessageEvent) => {
    try {
      postMessage(
        { success: true, data: await task(e.data) } as WorkerResultSuccess<
          TResult
        >,
      );
    } catch (err) {
      postMessage(
        { success: false, error: err } as WorkerResultError<typeof err>,
      );
    }
  });
}
