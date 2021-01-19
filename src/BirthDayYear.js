class BirthDayYear {
  #age;
  #day;
  #month;

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
    if (
      this.getMonth <= new Date().getMonth() + 1 &&
      this.getDay < new Date().getDate()
    ) {
      return new Date().getFullYear() - this.getAge - 1;
    } else {
      if (this.getDay <= 30) {
        return new Date().getFullYear() - this.getAge - 1;
      } else {
        return new Date().getFullYear() - this.getAge;
      }
    }
  }
}

module.exports = new BirthDayYear();
