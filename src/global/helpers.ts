export const noop = () => {};
export const arrayIntersection = <T = any>(a: T[], b: T[]) => {
  const s = new Set(b);
  return a.filter((x) => s.has(x));
};
export const isNumeric = (n: any) => !isNaN(parseFloat(n)) && isFinite(n);
export const isNull = (n: any) => n === null;
