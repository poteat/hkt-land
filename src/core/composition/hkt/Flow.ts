import { HKT } from "../../HKT";
import { Reverse } from "../../utility/tuples/Reverse";
import { Compose } from "../Compose";

/**
 * Left-compose the provided HKTs into one HKT.
 */
export interface Flow<HKTs extends HKT[]> extends HKT {
  f: (x: this["T"]) => Compose<Reverse<HKTs>, this["T"]>;
}
