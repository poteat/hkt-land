/**
 * Reverse the provided elements as a tuple.
 */
export type Reverse<T extends unknown[]> = T extends []
  ? []
  : T extends [infer U, ...infer Rest]
  ? [...Reverse<Rest>, U]
  : never;
