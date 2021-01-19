const { test, expect } = require("@jest/globals");
const BirthDayYear = require("../src/BirthDayYear");

describe("BirthDayYear Test 7", () => {
  test("Se mês=0, dia=1, idade=0", () => {
    BirthDayYear.setMonth = 0;
    BirthDayYear.setDay = 1;
    BirthDayYear.setAge = 0;
    expect(BirthDayYear.getYear).toEqual(0);
  });
});
