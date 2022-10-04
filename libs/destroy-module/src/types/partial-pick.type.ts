export type PartialPick<T, V extends keyof T> = Partial<Pick<T, V>>;

export type PartialPickField<T, V extends keyof T> = Omit<T, V> & PartialPick<T, V>;
