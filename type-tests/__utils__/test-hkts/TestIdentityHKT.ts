import { HKT } from "../../../src/core/HKT";

/**
 * A test implementation of an identity HKT.
 */
export declare class TestIdentityHKT extends HKT {
  f: (T: this["T"]) => typeof T;
}
