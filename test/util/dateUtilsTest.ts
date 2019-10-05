import { compareDate } from "../../src/util/dateUtils";

describe("dateUtils", (): void => {
  describe.each`
    a                                 | b                                 | expected
    ${new Date(2019, 8, 20, 0, 0, 0)} | ${new Date(2019, 8, 21, 0, 0, 0)} | ${1}
    ${new Date(2019, 8, 20, 0, 0, 0)} | ${new Date(2019, 8, 20, 0, 0, 0)} | ${0}
    ${new Date(2019, 8, 21, 0, 0, 0)} | ${new Date(2019, 8, 20, 0, 0, 0)} | ${-1}
  `("compareDate", ({ a, b, expected }): void => {
    test(`returns ${expected}`, (): void => {
      expect(compareDate(a, b)).toBe(expected);
    });
  });
});
