const { test, expect } = require("@jest/globals");
const BirthDayYear = require("../src/BirthDayYear");

describe("BirthDayYear Test 3", () => {
  test("Se mês=1, dia=0, idade=20", () => {
    BirthDayYear.setMonth = 1;
    BirthDayYear.setDay = 0;
    BirthDayYear.setAge = 20;
    expect(BirthDayYear.getYear).toEqual(0);
  });
});
