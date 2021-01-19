const { test, expect } = require("@jest/globals");
const BirthDayYear = require("../src/BirthDayYear");

describe("BirthDayYear Test 5", () => {
  test("Se mês=1, dia=1, idade=0", () => {
    BirthDayYear.setMonth = 1;
    BirthDayYear.setDay = 0;
    BirthDayYear.setAge = 0;
    expect(BirthDayYear.getYear).toEqual(0);
  });
});
