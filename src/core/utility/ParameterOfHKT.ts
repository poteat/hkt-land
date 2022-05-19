import { HKT } from "../HKT";
import { Assume } from "./Assume";

/**
 * Given a HKT, determine the parameter type of the HKT, i.e. the type which all
 * input types must be assignable to.
 *
 * Underlying HKT definitions use Assume to encode the input type.
 */
export type ParameterOfHKT<F extends HKT> = F["f"] extends (
  T: Assume<unknown, infer U>
) => unknown
  ? U
  : unknown;
