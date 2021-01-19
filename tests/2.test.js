const { test, expect } = require("@jest/globals");
const BirthDayYear = require("../src/BirthDayYear");

describe("BirthDayYear Test 2", () => {
  test("Se mês=1, dia=32, idade=20", () => {
    BirthDayYear.setMonth = 1;
    BirthDayYear.setDay = 32;
    BirthDayYear.setAge = 20;
    expect(BirthDayYear.getYear).toEqual(0);
  });
});
