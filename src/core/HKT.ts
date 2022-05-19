import { GenericFunction } from "./generic/GenericFunction";
import { Assume } from "./utility/Assume";

/**
 * A wrapper that encodes a parameterized type, i.e. whereby the encoded mapping
 * can be applied to a given type to return a new type.
 */
export abstract class HKT {
  /**
   * The input type to be filled.
   */
  readonly T: unknown;

  /**
   * The mapping function to be applied to the input type.
   */
  abstract f: GenericFunction;
}
