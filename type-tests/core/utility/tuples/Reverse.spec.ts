import { expectType } from "tsd-lite";
import { Reverse } from "../../../../src/core/utility/tuples/Reverse";

describe("Reverse", () => {
  it("reverses an empty tuple", () => {
    const x = [] as unknown as Reverse<[]>;
    expectType<[]>(x);
  });

  it("can reverse string tuples", () => {
    const x = [] as unknown as Reverse<["foo", "bar"]>;
    expectType<["bar", "foo"]>(x);
  });
});
