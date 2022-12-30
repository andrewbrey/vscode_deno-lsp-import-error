export function invariant(condition: any, message?: string): asserts condition {
  if (condition) return;

  const prefix = "Invariant failed";
  const value: string = message ? `${prefix}: ${message}` : prefix;
  throw new Error(value);
}
