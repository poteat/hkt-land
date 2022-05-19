import { Apply } from "../Apply";
import { HKT } from "../HKT";
import { Assume } from "../utility/Assume";
import { ParameterOfHKT } from "../utility/hkt/ParameterOfHKT";

/**
 * Given a set of HKTs, compose and apply them such that the resultant type is
 * the expected result of the composition.
 *
 * This implementation does not yet enforce intra-HKT type constraints.
 */
export type Compose<HKTs extends HKT[], X> = HKTs extends []
  ? X
  : HKTs extends [infer Head, ...infer Tail]
  ? Apply<
      Assume<Head, HKT>,
      Assume<
        Compose<
          Assume<Tail, HKT[]>,
          Assume<X, ParameterOfHKT<Assume<Head, HKT>>>
        >,
        ParameterOfHKT<Assume<Head, HKT>>
      >
    >
  : never;
