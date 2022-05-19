import { expectType } from "tsd-lite";
import { Assume } from "../../../src/core/utility/Assume";

describe("Assume", () => {
  it("takes the narrowest interpretation", () => {
    const x = 1 as Assume<1 | 2 | 3, number>;
    expectType<1 | 2 | 3>(x);
  });

  it("defaults to the second parameter", () => {
    const x = "" as Assume<number, string>;
    expectType<string>(x);
  });
});
