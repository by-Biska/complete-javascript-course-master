'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName} you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear > 1981 && birthYear <= 1996) {
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//   }
// //   add(2, 3);
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas'
// let job = 'teacher'
// const year = 1991

// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b
// }
// const addExpr =  function(a, b) {
//   return a + b
// }
// const addArrow = (a, b) => a + b

// if(!numProducts) deleteShoppingCart()

// var numProducts = 10

// function deleteShoppingCart() {
// console.log('All products deleted');
// }

// var x = 1
// let y = 1
// const z = 1

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1991);

// var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     // Solutions 1
//     // const self = this;
//     // const isMillenial = function(){
//     //   console.log(self.year > 1981 && self.year < 1996);
//     // }

//     // Solutions 2
//     const isMillenial = () => {
//       console.log(this.year > 1981 && this.year < 1996);
//     };

//     isMillenial();
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// jonas.greet();
// jonas.calcAge();

// // argumet keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// const addArrow = (a, b) => {
//   console.log(arguments);
//   a + b;
// };
// addArrow(2, 5, 8);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'Jonas',
//     age: 30,
// }
// const friend = me
// friend.age = 27
// console.log("Friend", friend)
// console.log("Me", me)

let lastName = 'Varakin'
let oldLastName = lastName
lastName = 'Davis'
console.log(lastName);
console.log(oldLastName);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Varakin',
    age: 27,
}
const marriedJessica = jessica
marriedJessica.lastName = "Davis"


const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Varakin',
    age: 27,
    family: ['Alice', 'Bob'],
}

const jessicaCopy = Object.assign({}, jessica2)
jessicaCopy.lastName = 'Davis'
jessicaCopy.family.push('Mary')
jessicaCopy.family.push('John')
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);