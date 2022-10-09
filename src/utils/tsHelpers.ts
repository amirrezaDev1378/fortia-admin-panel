
import {CollectionTypeSchema} from "@strapi/strapi";

export type Overwrite<Base, Overrides> = Omit<Base, keyof Overrides> & Overrides;


export type GetStrapiRequest<T extends CollectionTypeSchema> = {
        data: T["attributes"][] | T["attributes"]
}
export type GetStrapiRequestArr<T extends CollectionTypeSchema> = {
    data: T["attributes"][]
}

type PrependNextNum<A extends Array<unknown>> = A['length'] extends infer T ? ((t: T, ...a: A) => void) extends ((...x: infer X) => void) ? X : never : never;

type EnumerateInternal<A extends Array<unknown>, N extends number> = { 0: A, 1: EnumerateInternal<PrependNextNum<A>, N> }[N extends A['length'] ? 0 : 1];

export type Enumerate<N extends number> = EnumerateInternal<[], N> extends (infer E)[] ? E : never;

export type Range<FROM extends number, TO extends number> = Exclude<Enumerate<TO>, Enumerate<FROM>>;
