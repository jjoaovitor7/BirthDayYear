class BirthDayYear {
  #age;
  #day;
  #month;

  // constructor(day, month, age) {
  //   this.#day = day;
  //   this.#month = month;
  //   this.#age = age;
  // }

  get getDay() {
    return this.#day;
  }

  set setDay(value) {
    this.#day = value;
  }

  get getMonth() {
    return this.#month;
  }

  set setMonth(value) {
    this.#month = value;
  }

  get getAge() {
    return this.#age;
  }

  set setAge(value) {
    this.#age = value;
  }

  get getYear() {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();

    if (this.getMonth <= currentMonth + 1 && this.getDay < currentDay) {
      return currentYear - this.getAge - 1;
    } else {
      const daysOfMonth = new Date(currentYear, currentMonth, 0).getDate();
      if (this.getDay <= daysOfMonth) {
        return currentYear - this.getAge - 1;
      } else {
        return currentYear - this.getAge;
      }
    }
  }
}

module.exports = new BirthDayYear();
