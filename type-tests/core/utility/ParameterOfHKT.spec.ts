import { expectType } from "tsd-lite";

import { ParameterOfHKT } from "../../../src/core/utility/ParameterOfHKT";
import { TestIdentityHKT } from "../../__utils__/test-hkts/TestIdentityHKT";
import { TestPushHKT } from "../../__utils__/test-hkts/TestPushHKT";

describe("ParameterOfHKT", () => {
  it("extracts narrow parameter types", () => {
    const x = [] as ParameterOfHKT<TestPushHKT>;
    expectType<string[]>(x);
  });

  it("can handle unconstrained HKTs", () => {
    const x = [] as ParameterOfHKT<TestIdentityHKT>;
    expectType<unknown>(x);
  });
});
