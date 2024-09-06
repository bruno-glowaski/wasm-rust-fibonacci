export function fibonacci(index: number): number {
  if (index <= 0) return 0;
  if (index <= 2) return 1;
  return fibonacci(index - 1) + fibonacci(index - 2);
}
