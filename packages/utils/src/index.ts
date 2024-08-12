export * from './middlewares';

export const isA = (data: string) => !!data;
export const isB = (data: number) => !!data;
export const isC = (data: boolean) => data;
export const isD = (data: object) => !!data;
