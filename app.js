'use strict'

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function () {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  };
  
  const person1 = new Person("Alice", 30);
  person1.greet();
  
  class Persons {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
    }
  
    haveBirthday() {
      this.age = age++;
      console.log(`Happy ${this.age}th Birthday, ${this.name}!`);
    }
  }
  
  const person2 = new Persons("Alice", 30);
  person2.greet();
  