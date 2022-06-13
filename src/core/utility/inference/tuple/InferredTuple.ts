import { InferredType } from "../InferredType";

/**
 * A tuple of narrowed types.
 */
export type InferredTuple = InferredType[] | ReadonlyArray<InferredType>;
