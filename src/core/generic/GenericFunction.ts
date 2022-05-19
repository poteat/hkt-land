/**
 * A arbitrary function type. This is meant to represent a function that takes
 * in an unknown number of unknown parameters, and returns an unknown result.
 */
export type GenericFunction = (...x: any[]) => unknown;
