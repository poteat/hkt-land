import { expectType } from "tsd-lite";
import { GenericFunction } from "../../src";
import { HKT } from "../../src/core/HKT";

declare const hkt: HKT;

describe("HKT", () => {
  it("has a f property", () => {
    expectType<GenericFunction>(hkt.f);
  });
});
