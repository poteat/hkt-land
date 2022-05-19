import { HKT } from "../../../src/core/HKT";
import { Assume } from "../../../src/core/utility/Assume";

/**
 * A test implementation of a input-enforced HKT which pushes the string 'foo'
 * into the input type.
 */
export declare class TestPushHKT extends HKT {
  f: (T: Assume<this["T"], string[]>) => [...typeof T, "foo"];
}
