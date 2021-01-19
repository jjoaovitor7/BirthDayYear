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
    if (value > 0) {
      this.#day = value;
    }
  }

  get getMonth() {
    return this.#month;
  }

  set setMonth(value) {
    if (value > 0) {
      this.#month = value;
    }
  }

  get getAge() {
    return this.#age;
  }

  set setAge(value) {
    if (value > 0) {
      this.#age = value;
    }
  }

  get getYear() {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();

    if (
      this.getMonth == undefined ||
      this.getDay == undefined ||
      this.getAge == undefined
    ) {
      console.log("Um dos atributos (dia, mês e idade) não foi definido.");
      return 0;
    } else {
      if (this.getMonth <= currentMonth + 1 && this.getDay < currentDay) {
        return currentYear - this.getAge - 1;
      } else {
        const daysOfMonth = new Date(currentYear, currentMonth, 0).getDate();
        if (this.getDay <= daysOfMonth) {
          return currentYear - this.getAge - 1;
        } else {
          // throw "Error.";
          console.log("Error.");
          return 0;
        }
      }
    }
  }
}

module.exports = new BirthDayYear();
