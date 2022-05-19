import { GenericFunction } from "../../../src/core/generic/GenericFunction";
import { expectType } from "tsd-lite";

declare const f: GenericFunction;

describe("GenericFunction", () => {
  it("returns unknown", () => {
    expectType<unknown>(f());
  });

  it("takes any parameters", () => {
    expectType<unknown>(f(1, 2, 3));
  });
});
