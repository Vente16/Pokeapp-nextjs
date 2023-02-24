type Key = string | number;

export type Nullable<T> = T | null;
export type GenericObjectInterface<T> = {
  [key in Key]: T;
};

export type NullableString = Nullable<string>;
export type NullableNumber = Nullable<number>;

export type GenericObject = { [key in Key]: any };
