const { test, expect } = require("@jest/globals");
const BirthDayYear = require("../src/BirthDayYear");

describe("BirthDayYear Test 4", () => {
  test("Se mês=0, dia=1, idade=20", () => {
    BirthDayYear.setMonth = 1;
    BirthDayYear.setDay = 0;
    BirthDayYear.setAge = 20;
    expect(BirthDayYear.getYear).toEqual(0);
  });
});
