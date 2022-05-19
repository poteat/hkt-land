/**
 * Assume that T extends U, for the purposes of the type calculation being
 * performed. This is often useful for more complex types, as a hint to the
 * compiler.
 */
export type Assume<T, U> = T extends U ? T : U;
