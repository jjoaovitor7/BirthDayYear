const { test, expect } = require("@jest/globals");
const BirthDayYear = require("../src/BirthDayYear");

describe("BirthDayYear Test", () => {
  test("Se mês=1, dia=1 e idade=20", () => {
    BirthDayYear.setMonth = 1;
    BirthDayYear.setDay = 1;
    BirthDayYear.setAge = 20;
    expect(BirthDayYear.getYear).toEqual(2000);
  });

  test("Se mês=1, dia=32, idade=20", () => {
    BirthDayYear.setMonth = 1;
    BirthDayYear.setDay = 32;
    BirthDayYear.setAge = 20;
    console.log(BirthDayYear.getYear);
    expect(BirthDayYear.getYear).toEqual(0);
  });
});
