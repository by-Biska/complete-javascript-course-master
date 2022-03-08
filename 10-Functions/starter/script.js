'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numPassanger = 1, price = 199 * numPassanger) {
//   // numPassanger = numPassanger || 1;
//   // price = price || 1;

//   const booking = {
//     flightNum,
//     numPassanger,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);

// const flight = 'LH123'
// const kirill = {
//   name: 'Kirill Varakim',
//   passport: 1231231232112
// }

// const checkIn = function(flightNum, passenger) {
//   flightNum = 'LH999'
//   passenger.name = 'Mr.' + passenger.name
//   if(passenger.passport === 1231231232112) {
//     alert('Check in')
//   } else {
//     alert('Wrong passport')
//   }
// }

// const newPassport  = function(person) {
//   person.passport = Math.trunc(Math.random() * 1000000)
// }

// newPassport(kirill)
// checkIn(flight, kirill)
// console.log(flight);
// console.log(kirill);

// const oneWord = function(str) {
//   return str.replaceAll(' ', '').toLowerCase()
// }

// const upperFirstWord = function(str) {
//   const [first, ...others]  = str.split(' ')
//   return [first.toUpperCase() , ...others].join(' ')
// }

// const transformer = function(str, fn) {
// console.log(`Transformed string: ${fn(str)}`);
// console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is the best!', upperFirstWord)
// transformer('JavaScript is the best!', oneWord)

// const high5 = function() {
//   console.log('👍');
// }
// document.body.addEventListener('click', high5)


// const test = ['Jonas', 'Martha', 'Adam'].forEach(high5)

// const greet = function(greeting) {
//   return function(name) {
//     console.log(`${greeting} ${name}`);
//   }
// }

// const greetHey = greet('Hey')
// greetHey('Jonas')
// greetHey('Kirill')

// greet('Hello')('Jonas')

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('Hi')('Jonas')

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//     }
// }



// lufthansa.book(12, 'Kirill')
// console.log(lufthansa);

// const eurowings = {
//     name: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],

// }

// const book = lufthansa.book

// // Call
// book.call(eurowings, 23, 'Sarah Williams')
// console.log(eurowings);
// book.call(lufthansa, 239, 'Mary Cooper')
// console.log(lufthansa);

// const swiss = {
//     airline: 'Swiss',
//     name: 'Swiss',
//     iataCode: 'LX',
//     bookings: [],
// }

// book.call(swiss, 583, "John Winston")
// console.log(swiss);

// // Apply
// const flightData = [583, 'Jojo Kutaro']
// book.apply(swiss, flightData)
// console.log(swiss);

// book.call(swiss, ...flightData)

// // Bind
// const bookLH = book.bind(lufthansa)
// const bookEW = book.bind(eurowings)
// const bookLX = book.bind(swiss)

// bookEW(23, 'Steven Williams')

// console.log(eurowings);

// const bookEW23 = book.bind(eurowings, 23)
// bookEW23('John Doe')

// lufthansa.planes = 300
// lufthansa.buyPlane = function () {
//     this.planes++
//     console.log(this.planes);
// }

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

// // Partial application
// const addTax = (rate, value) => value + value * rate
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23)

// console.log(addVAT(100));
// console.log(addVAT(23));

// function addTaxRate(rate) {
//     return function (value) {
//         return value + value * rate
//     }
// }

// const addVAT2 = addTaxRate(0.23)

// console.log(addVAT2(100));
// console.log(addVAT2(23));

// Challenge №1
// const poll = {
//     question: "What is your favourite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
//     // This generates [0, 0, 0, 0]. More in the next section!
//     answers: new Array(4).fill(0),
//     displayResults(type = 'array') {
//         if (type === 'array') {
//             console.log(this.answers);
//         } else if (type === 'string') {
//             console.log(`Poll result are ${this.answers.join(', ')}`);
//         }
//     },
//     registerNewAnswer() {
//         const answerNum = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`))

//         if (typeof answerNum === "number" && answerNum >= 0 && answerNum <= 3) {
//             this.answers[answerNum]++
//             this.displayResults()
//             this.displayResults('string')
//         } else console.log('You wrote wrong answer');
//     },
// };
// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))

// poll.displayResults.call({ answers: [5, 2, 3]}, 'string')
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1]}, 'string')

// (function () {
//     console.log('This will newer run again')
// })();
// (() => console.log('This will Also never run again'))();
// (() => console.log('This will ALSO never run again'))();
// (() => {
//     console.log('Ok')
// })();

// {
//     const isPrivete = 23
//     var notPrivete = 46
// }
// // console.log(isPrivate);
// console.log(notPrivete);

const secureBooking = function() {
    let passangerCount = 0 
    
    return function() {
        passangerCount++
        console.log(`${passangerCount} passanger`);
    }
}

const booker = secureBooking()

booker()
booker()
booker()
console.dir(booker)