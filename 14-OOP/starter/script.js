'use strict';

/*
const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //     this.calcAge = function () {
  //         console.log(2037 - this.birthYear);
  //     }
};

const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
// console.log(matilda);
const jack = new Person('Jack', 1975);

// console.log(jack instanceof Person);

// Prototypes
// console.log(Person.prototype);
Person.prototype.calcAge = function () {
  // console.log(2037 - this.birthYear);
};

jonas.calcAge();

Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.__proto__.species);
// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

const arr = [1, 4, 6, 436, 546, 12, 3, 4, 6];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

// console.log(arr.unique());

const h1 = document.querySelector('h1');
// console.dir(h1);
// console.dir(x => x + 1);

// const Car = function (name, speed) {
//   this.name = name;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);
// car1.accelerate();
// car1.brake();
// console.log(car1);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    // console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    // console.log(name);
    if (name.trim().includes(' ')) this._fullName = name;
    else alert('Please enter a full name!');
  }

  get fullName() {
    return this._fullName;
  }

  static hey = function() {
    console.log('Hey there 🙋‍♀️');
  }
}

const jessica = new PersonCl('Jessica Davis', 1999);
console.log(jessica.age);
// console.log(jessica);
jessica.calcAge(1);

const walter = new PersonCl(' Walter White ', 1965)

const account = {
  owner: 'John',
  movements: [200, 532, 1234, 432, 500],

  get latest() {
    return this.movements.pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },

};

// console.log(account.latest);
account.latest = 50;
// console.log(account.movements);

Person.hey = function() {
  console.log('Hey there 🙋‍♀️');
}
// Person.hey()
// PersonCl.hey()

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
  }
}

const steven = Object.create(PersonProto)
steven.name = 'Steven'
steven.birthYear = 2002
console.log(steven);
steven.calcAge()

const sarah = Object.create(PersonProto)
sarah.init('Sarah', 1997)
sarah.calcAge()

// Challange #2
class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  accelerate(){this.speed += 10;}
  brake(){this.speed -= 5;}

  get speedUs() {
    return this.speed / 1.6
  }

  set speedUs(value) {
    this.speed = value * 1.6
  }
}

const car1 = new Car('Ford', 120);
car1.accelerate();
car1.brake();
console.log(car1);
console.log(car1.speedUs);
car1.speedUs = 175
console.log(car1);
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and  I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Scinece');
const mike2 = new Person('Mike', 2020);
console.log(mike);
mike.introduce();
mike.calcAge()

Student.prototype.constructor = Student
console.dir(Student.prototype.constructor);
const Car = function (name, speed) {
  this.name = name;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
};
Car.prototype.brake = function () {
  this.speed -= 5;
};

const EV = function(name, speed, charge) {
  Car.call(this, name, speed)
  // this.name = name;
  // this.speed = speed;
  this.charge = charge
};D


EV.prototype = Object.create(Car.prototype)

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo
}
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(`${this.name} going at ${this.speed} km/h, with charge of ${this.charge}%`);
}

const car1  = new EV("Tesla", 120, 23)
console.log(car1);
const car2  = new Car("Tesla", 120)
car1.accelerate()
car1.accelerate()
car1.accelerate()
car1.accelerate()
car1.chargeBattery(100)
console.log(car1.charge);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  
  calcAge() {
    // console.log(2037 - this.birthYear);
  }
  
  get age() {
    return 2037 - this.birthYear;
  }
  
  set fullName(name) {
    // console.log(name);
    if (name.trim().includes(' ')) this._fullName = name;
    else alert('Please enter a full name!');
  }
  
  get fullName() {
    return this._fullName;
  }
  
  static hey = function() {
    console.log('Hey there 🙋‍♀️');
  }
}


class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear)
    this.course = course
  }
  
  introduce () {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  
  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like a ${2037 - this.birthYear + 10}`);
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
console.log(martha);
martha.introduce()
martha.calcAge()

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  
  init(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
  }
}

const steven = Object.create(PersonProto)

const StudentProto = Object.create(PersonProto);

StudentProto.init = function(firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course
}
StudentProto.introduce = function() {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto)
jay.init('Jay', 2010, 'Computer Scimese')
jay.introduce()
jay.calcAge()



class Account {
  // 1) Public fields (instance)
  locale =navigator.language;
  
  // 2) Private fields
  #movements = [];
  #pin;
  
  
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // Protected property
    // this._movements = []
    // this.locale = navigator.language;
    
    console.log(`thankx for  opening account ${this.owner}`);
  }
  
  // 3) Public methods
  
  // Public interface
  getMovements() {
    return this.#movements
  }
  
  deposit(amount) {
    this.#movements.push(amount);
    return this
  }
  
  withdraw(amount) {
    this.deposit(-amount);
    return this
  }
  
  
  requestLoan(amount) {
    if(this.#approveLoan(amount)) {
      this.deposit(amount);
      console.log(`Loan Approved`);
      return this
    }
  }
  
  static helper() {
    console.log('Helper');
  }
  
  //  4)Private methods
  #approveLoan(amount) {
    return true
  }
  
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250)
acc1.withdraw(140)
acc1.requestLoan(1000)
Account.helper()
// acc1.#approveLoan(1000)

console.log(acc1);

// console.log(acc1.#movements);
// console.log(acc1.#pin);

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000)
console.log(acc1.getMovements());
*/

class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    return this
  }
  brake() {
    this.speed -= 5;
    return this
  }
}

class EVCl extends Car {
  // Private
  #charge;

  constructor(name, speed, charge) {
    super(name, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `'${this.name}' going at ${this.speed} km/h, with charge of ${this.#charge}%`
    );
    return this
  }
}

const car1 = new EVCl('Rivian', 120, 23)
car1.accelerate().chargeBattery(90).accelerate().accelerate().brake()