const { test, expect } = require("@jest/globals");
const BirthDayYear = require("../src/BirthDayYear");

describe("BirthDayYear Test 8", () => {
  test("Se mês=0, dia=0, idade=0", () => {
    BirthDayYear.setMonth = 0;
    BirthDayYear.setDay = 0;
    BirthDayYear.setAge = 0;
    expect(BirthDayYear.getYear).toEqual(0);
  });
});
