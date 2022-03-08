'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(45);
  console.log(output);
}



// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const textarea = document.querySelector('textarea');
// const btn = document.querySelector('button');

// let data = `underscore_case
// first_name
// Some_Variable
//  calculate_AGE-Fun
// delayed_departure`;

// // btn.addEventListener('click', function() {
// //   data = textarea.value
// //   console.log(typeof data);
// // })

// const splitLines = str => str.split(/\r?\n/);

// function camelize(str) {
//   const strarr = splitLines(str.replace(' ', '').toLowerCase());
//   for (const [i, string] of strarr.entries()) {
//     // let [first, second] = string.split('_');

//     // let stringFine = [
//     //   first,
//     //   ...[second.replace(second[0], second[0].toUpperCase())],
//     // ].join('');
//     // const padSpce = 20;
//     // console.log(stringFine.padEnd(padSpce, ' ').padEnd(padSpce + i + 1, '✅'));

//     console.log(camelize2(string))
//   }
// }

// camelize(data);

// function camelize2(text) {
//     return text.replace(/^([A-Z])|[\s-_]+(\w)/g, function(match, p1, p2, offset) {
//         if (p2) return p2.toUpperCase();
//         return p1.toLowerCase();
//     });
// }
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours,

//   order(sterterIndex, mainIndex) {
//     return [this.starterMenu[sterterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your deleclicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza(mainIng, ...otherIng) {
//     console.log(mainIng);
//     console.log(otherIng);
//   },
// };

// console.log('a+very+nice+string'.split('+'));
// console.log('Kirill Varakin'.split(' '));

// const [firstName, lastName] = 'Kirill Varakin'.split(' ');
// console.log(firstName);
// console.log(lastName);

// const newName = ['Mr.', firstName, lastName.toUpperCase()]
//   .join(' ')
//   .replace(' ', '');
// console.log(newName);

// function capitalizeName(name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// }

// const passanger = 'jessila ann smith davis';
// capitalizeName(passanger);

// // Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(30, '+'));
// console.log('Jonas'.padStart(25, '+').padEnd(30, '+'));

// function maskCreditCard(number) {
//   const str = String(number);
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// }

// console.log(maskCreditCard(7346235476522837456))
// console.log(maskCreditCard(52256))
// console.log(maskCreditCard('6342871636235476522456487987'))

// const message2 = 'Bad waether... All Departues Delayed... ';
// console.log(message2.repeat(5));

// const planeInLine = function(n) {
//   console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// }
// planeInLine(4)

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passanger = 'jOnAS';

// function fixName(name) {
//   const passangerLower = name.toLowerCase();
//   const passangerCorrect =
//     passangerLower[0].toUpperCase() + passangerLower.slice(1);
//   console.log(passangerCorrect);
// }
// fixName(passanger);

// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.IO \n';
// function conpareEmail(email, loginEmail) {
//   const normalizedEmail = loginEmail.toLowerCase().trim();
//   console.log(email === normalizedEmail);
// }
// conpareEmail(email, loginEmail);

// const priceUS = '288.97$';
// const priceGB = priceUS.replace('$', '£').replace('.', ',');
// console.log(priceGB);
// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// }

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// const plane = 'A320';
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[3]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.lastIndexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' '), airline.length));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E  are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat');
//   else console.log('You got lucky');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// const properties = Object.keys(openingHours)

// let openStr = `We are open on ${properties.length} days: `

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `
// }
// console.log(openStr);

// const values = Object.values(openingHours)
// console.log(...values);

// const entries =  Object.entries(openingHours)
// console.log(entries);

// for (const [key, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// console.log(restaurant.openingHours.mon?.open)

// for (const day of weekdays) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// console.log(restaurant.order?.(0, 1) ?? 'Method does exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does exist');

// const users = [
//   { name: 'Jonas', email: '123@mail.ru'}
// ]

// console.log(users[0]?.name ?? 'User array empty');

// Coding challebge №1
// const  game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const events = new Set();
// for (const [key, value] of gameEvents) {
//   events.add(value);
// }
// console.log(events);

//convert map to array
// const events  = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);

// const time  = [...gameEvents.keys()].pop()
// console.log(`An event happened, on
// average, every ${time / gameEvents.size} minutes:`);

// for (const [key, value] of gameEvents) {
//   if(key <= 45) {
//     console.log(`[FIRST HALF] ${key}: ${value}`);
//   } else {
//     console.log(`[SECOND HALF] ${key}: ${value}`);
//   }
// };

// const question =  new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!']
// ])

// console.log(question);

// const hoursMap = new Map(Object.entries(openingHours))
// console.log(hoursMap);

// console.log(question.get('question'));
// for(const [key, value] of question) {
//   if(typeof key ==='number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'))
// console.log(answer);

// if (answer === 3) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

// console.log([...question]);

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// // console.log(rest.get(true));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();
// const arr = [1, 2]
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading')
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(orderSet);

// console.log(new Set('Jonas'));
// console.log(new Set());

// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// orderSet.clear()
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

// console.log(new Set('kirillvarakin').size``);

// for (const [num, name] of game.scored.entries()) {
//   console.log(`Goal ${num + 1}: ${name}`);
// }

// const odds = Object.values(game.odds)
// let average = 0
// for(const odd of odds) average += odd
// average /=odds.length
// console.log(average);

// for(const [name, num] of Object.entries(game.odds)) {
//   const teamStr = name === 'x' ? 'draw' : `victory ${game[name]}`
//   console.log(`Odd of victory ${teamStr}: ${num}`);
// }

// const scorers = {};
//
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] =1)
//   console.log(scorers);
// };

// const { team1: team1, x: draw, team2: team2 } = game.odds;
// const averageOdd = (team1 + draw + team2) / 3;
// console.log(averageOdd);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// const players1 = game.players[0];
// const players2 = game.players[1];
// console.log(players1);
// console.log(players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// const { team1: team1, x: draw, team2: team2 } = game.odds;
// console.log(team1, draw, team2);

// function printGoals(...palyers) {
// console.log(`${palyers.length} goals were scored`);
// }

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
// printGoals(...game.scored)

// team1 < team2 && console.log("Team 1 is more likely to win");
// team1 > team2 && console.log("Team 2 is more likely to win");

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Pizza',]
//   owner: 'Jiovani Rossi',
// };

// rest1.numGuests = rest1.numGuests ?? 10
// rest2.numGuests = rest2.numGuests ?? 10

// rest1.numGuests ||= 10
// rest2.numGuests ||= 10

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// restaurant.numGuests = 0
// const guests2 = restaurant.numGuests || 10
// console.log(guests2);

// const guestsCorrect = restaurant.numGuests ?? 10
// console.log(guestsCorrect);

// console.log('---- OR ----')
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 'Jonas');
// console.log(undefined || null);

// restaurant.numGuests = 23
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10
// console.log(guests2);

// console.log('---- AND ----')
// console.log(0 && 'Jonas')
// console.log(7 && 'Jonas')

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroms', 'spinch')
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroms', 'spinch')

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(2, 4, 6, 7, 7, 8, 8, 8, 65, 4, 4, 5);

// const x = [23, 5, 7];
// add(...x)

// restaurant.orderPizza('onion', 'cat', 'orange')
// restaurant.orderPizza('mushrooms')

// const arr = [7, 8, 9];

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT object
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

// const ingridients = [
//   prompt("Let's make pasta! Ingridient 1?"),
//   prompt('Ingridient 2?'),
//   prompt('Ingridient 3?'),
// ];
// console.log(ingridients);

// restaurant.orderPasta(...ingridients);

// Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant}
// restaurantCopy.name = 'Ristorante Roma'
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// const { menu: menuCourse = [], starterMenu: starters = [] } = restaurant;
// console.log(menuCourse, starters);

// // mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// const {
//   fri: { open: o = [], close: c = [], breaks: e = [] },
// } = openingHours;
// console.log(o, c);

// const arr = [2, 3, 4];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // let temp = main
// // main = secondary
// // secondary = temp
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, ,j] = nested
// // console.log(i,j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
