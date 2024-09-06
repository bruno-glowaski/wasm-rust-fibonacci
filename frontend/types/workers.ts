export type WorkerResultSuccess<TResult> = { success: true; data: TResult };
export type WorkerResultError<TError> = { success: false; error: TError };

export type WorkerResult<TResult, TError = unknown> =
  | WorkerResultSuccess<TResult>
  | WorkerResultError<TError>;

export class WorkerConfig {
  constructor(
    public readonly url: URL,
    public readonly options?: WorkerOptions,
  ) {}
}
