/**
 * Compare Dates by descending order
 * @param a Date
 * @param b Date
 */
export function compareDate(a: Date, b: Date): number {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
}
