const FIRST_VALUES = [0, 1, 1] as readonly number[];

export function fibonacci(length: number): number[] {
  if (length < 0) {
    throw new RangeError("cannot produce a sequence with negative length");
  }

  if (length <= FIRST_VALUES.length) {
    return FIRST_VALUES.slice(0, length);
  }

  const result = [...FIRST_VALUES];
  result.length = length;
  for (let i = 3; i < length; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result;
}
