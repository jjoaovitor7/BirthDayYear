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

    // se os atributos day, month e age não estiverem definidos,
    // ou seja, talvez não atenderam os requisitos anteriores.
    if (
      this.getDay == undefined ||
      this.getMonth == undefined ||
      this.getAge == undefined
    ) {
      console.log("Um dos atributos (dia, mês e idade) não foi definido.");
      return 0;
    }

    // se os atributos day, month e age estiverem definidos,
    // ou seja, atenderam os requisitos anteriores.
    else {
      // se o mês inserido for menor que o mês atual
      // e o dia inserido for menor que o dia atual.
      if (this.getMonth <= currentMonth + 1 && this.getDay < currentDay) {
        return currentYear - this.getAge;
      }

      // se o mês inserido for maior que o mês atual
      // e o dia inserido for maior que o dia atual.
      else {
        const daysOfMonth = new Date(currentYear, currentMonth, 0).getDate();

        // se o dia inserido for menor que a quantidade de dias do mês atual
        if (this.getDay <= daysOfMonth) {
          // e se o dia for menor ou igual ao dia atual.
          if (this.getDay <= currentDay) {
            return currentYear - this.getAge - 1;
          }
          
          // e se o dia for maior ao dia atual.
          else {
            return currentYear - this.getAge;
          }
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
