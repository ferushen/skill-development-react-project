import { memo } from 'react';

type TypedMemo = <T>(c: T) => T;

export const typedMemo: TypedMemo = memo;
