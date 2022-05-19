import { expectType } from "tsd-lite";
import { Compose } from "../../../src/core/composition/Compose";
import { TestIdentityHKT } from "../../__utils__/test-hkts/TestIdentityHKT";
import { TestPushHKT } from "../../__utils__/test-hkts/TestPushHKT";

describe("Compose", () => {
  it("composes identity functions", () => {
    const x = 1 as Compose<[TestIdentityHKT, TestIdentityHKT], 1>;
    expectType<1>(x);
  });

  it("can handle useful HKTs", () => {
    const x = [] as unknown as Compose<[TestPushHKT, TestPushHKT], []>;
    expectType<["foo", "foo"]>(x);
  });
});
