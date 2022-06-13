import { GenericFunction } from "../../generic/GenericFunction";

/**
 * A 'constructive' recursive type that represents the universe of all possible
 * types. This is useful as a hint to the compiler that it should search for
 * more narrow potential types.
 */
export type InferredType =
  | string
  | number
  | boolean
  | GenericFunction
  | InferredType[]
  | ReadonlyArray<InferredType>
  | {
      [key: string]: InferredType;
    };
