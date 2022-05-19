import { expectType } from "tsd-lite";
import { Apply } from "../../src/core/Apply";
import { TestIdentityHKT } from "../__utils__/test-hkts/TestIdentityHKT";
import { TestPushHKT } from "../__utils__/test-hkts/TestPushHKT";

describe("Apply", () => {
  it("obeys identity laws", () => {
    const x = "" as Apply<TestIdentityHKT, string>;
    expectType<string>(x);
  });

  it("can apply useful HKTs", () => {
    const x = ["foo"] as Apply<TestPushHKT, []>;
    expectType<["foo"]>(x);
  });
});
