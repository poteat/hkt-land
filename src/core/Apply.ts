import { HKT } from "./HKT";
import { ParameterOfHKT } from "./utility/ParameterOfHKT";

/**
 * Apply the mapping function to the given input type. This works off of the
 * basis that the mapping function 'f' references the input type 'T', via a
 * reference to the 'this' type.
 */
export type Apply<F extends HKT, T extends ParameterOfHKT<F>> = ReturnType<
  (F & {
    readonly T: T;
  })["f"]
>;
