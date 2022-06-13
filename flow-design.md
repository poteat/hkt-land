# Flow Utility Design

Type-safe composition of functions is difficult and requires heavy type machinery. For example, if you wanted to denote the common `hypot` (hypotenuse) function in terms of composition (i.e. declaratively), you would need to use sophisticated types:

```ts
declare sum: (xs: number[]) => number
declare square: (xs: number) => number
declare map: (f: (x: number) => number) => (xs: number[]) => number[]

const hypot = flow(map(square), sum)
```

However, type-safe composition of _generic_ functions is harder still. Composition of generic functions is mostly useful when dealing with object types, as a method of constructing composable operations on objects. Since string manipulation is easier to reason about, and just as difficult, we will use that instead.

Consider the following elementary string manipulation problem:

> **Problem**: Remove all words that contains the letter 'z'.

Performing this operation on the type level using composable functional elements could be done roughly as follows, sans the sophisticated machinery mentioned before:

```ts
declare join: <J extends string>(j: J) =>
              <SS extends string[]>(ss: SS) =>
              Join<SS, J>

declare contains: <XS extends unknown[]>(xs: XS) =>
                  <X extends XS[keyof XS]>(x: X) =>
                  Contains<XS, X>

declare split:  <J extends string>(j: J) =>
                <S extend string>(s: S) =>
                Split<S, J>

declare filter: <F extends (x: unknown) => unknown>(f: F) =>
                <XS extends Parameters<F>[0]>(xs: XS) =>
                Filter<XS, F>

const removeWordsWithZ = flow(split(" "), filter(contains("z")), join(" "))
```

However, implementing `flow` this way is very difficult when you want to encode compatibility constraints between each generic function - that is to say, enforcing that parameter if $X_n$ outputs $O_n$, then the input associated with $X_n+1$, i.e. $I_n+1$ must extend $O_n$.

To sidestep this difficulty, we construct a new organization based on chaining, whose internal implementation is simpler.

```ts
const removeWordsWithZ = $
  .split(" ")
  .filter(
    $.contains("z").not()
  )
  .join(" ")
  .value()
```
