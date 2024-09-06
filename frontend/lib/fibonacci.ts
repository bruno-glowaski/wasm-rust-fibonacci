export function fibonacciNaive(index: number): number {
  if (index <= 0) return 0;
  if (index <= 2) return 1;
  return fibonacciNaive(index - 1) + fibonacciNaive(index - 2);
}

export function fibonacciMemoised(
  index: number,
  memo: Record<number, number> = {},
): number {
  if (memo[index] != null) return memo[index];
  if (index === 0) return 0;
  if (index < 3) return 1;
  const r = fibonacciMemoised(index - 1, memo) +
    fibonacciMemoised(index - 2, memo);
  memo[index] = r;
  return r;
}

export const fibonacci = fibonacciMemoised;
