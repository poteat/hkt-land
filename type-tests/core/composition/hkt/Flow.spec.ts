import { expectType } from "tsd-lite";
import { Apply } from "../../../../src/core/Apply";
import { Flow } from "../../../../src/core/composition/hkt/Flow";
import { TestPushHKT } from "../../../__utils__/test-hkts/TestPushHKT";

declare const hkt: Flow<[TestPushHKT, TestPushHKT]>;

describe("Flow", () => {
  it("can be applied", () => {
    const x = [] as unknown as Apply<typeof hkt, ["bar"]>;
    expectType<["bar", "foo", "foo"]>(x);
  });
});
