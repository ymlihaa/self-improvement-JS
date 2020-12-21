class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  printNameArrow() {
    setTimeout(() => {
      console.log("arrowFunction: ", this.name, " ", this.surname);
    }, 100);
  }
  printNameFunction() {
    setTimeout(function () {
      console.log("Function: ", this.name, " ", this.surname);
    });
  }
}

const PersonHasan = new Person("hasan", "keskin");

PersonHasan.printNameArrow();
PersonHasan.printNameFunction();
