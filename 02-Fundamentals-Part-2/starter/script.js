"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log(`I can drve :D`)

// Chellenge 1
// const culcAverage = (first_game, second_game, thrid_game) => (first_game + second_game + thrid_game) / 3

// function checkWinner(dolphin_avg, coalas_avg) {
//     if(dolphin_avg >= coalas_avg * 2) {
//         console.log(`Dolphin win ${dolphin_avg} vs. ${coalas_avg}`)
//     } else if(coalas_avg >= dolphin_avg * 2) {
//         console.log(`Koalas win ${coalas_avg} vs. ${dolphin_avg}`)
//     } else {
//         console.log(`No one wins`)
//     }
// }

// // Data 1
// // const dolphin_avg = culcAverage(44, 23, 71)
// // const coalas_avg = culcAverage(65, 54, 49)
// // Data 2
// const dolphin_avg = culcAverage(85, 54, 41)
// const coalas_avg = culcAverage(23, 34, 27)

// checkWinner(dolphin_avg, coalas_avg);

// Arrays

// const some_array = new Array(100, 'gulp')

// Return amount of ellement in the array
// some_array.lenght

// Add new ellement to the end of the array
// some_array.push('Jay')

// Add new ellement to the beginning of the array
// some_array.unshift('Jay')

// Remove last ellement from the array
// some_array.pop();

// Removes the first element from an array and returns it
// some_array.shift();

// eturns the index of the first occurrence of a value in an array, or -1 if it is not present.
// console.log(some_array.indexOf('Jay'))

// Determines whether an array includes a certain element, returning true or false as appropriate.
// console.log(some_array.includes('gulp'))

// Challenge 2
// const tipcalc =  bill =>  bill >=50 && bill <= 300 ? bill * 15 / 100 :  bill * 20 / 100

// const bills = new Array(125, 555, 44)
// const tips = new Array(tipcalc(bills[0]), tipcalc(bills[1]), tipcalc(bills[2]))
// const totals = new Array(tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2])

// console.log(bills, tips, totals)

// OBJECTS

// const jonas =  {
//     fiirstName: 'Jonas',
//     friends: [`Michael`, `Peter`, `Steven`],
// }

// console.log(`${jonas.fiirstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`)

// Challenge 3
/**
 * @param num The number to round
 * @param precision The number of decimal places to preserve
 */
//  function roundUp(num, precision) {
//     precision = Math.pow(10, precision)
//     return Math.ceil(num * precision) / precision
// }

// const mark_info = {
//     fullName: 'Mark Miller',
//     weight: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.BMI_result = this.weight / this.height ** 2
//         return this.BMI_result
//     }
// }
// const john_info = {
//     fullName: 'John Smith',
//     weight: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.BMI_result = this.weight / this.height ** 2
//         return this.BMI_result
//     }
// }

// if(mark_info.calcBMI() > john_info.calcBMI()) {
//     console.log(`${mark_info.fullName}'s (${roundUp(mark_info.BMI_result, 1)}) is higher than ${john_info.fullName}'s (${roundUp(john_info.BMI_result, 1)})`)
// } else {
//     console.log(`${john_info.fullName}'s (${roundUp(john_info.BMI_result, 1)}) is higher than ${mark_info.fullName}'s (${roundUp(mark_info.BMI_result, 1)})`)
// }

// LOOP
// for(let i = 1; i <=10; i++) {
//     console.log(i)
// }

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037-1991,
//     'teacher',
//     [`Michael`, `Peter`, `Steven`],
//     true,
//     false,
// ]

// const types = []

// for(let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i], typeof jonas[i])

//     // types[i] = typeof jonas[i]

//     types.push(typeof jonas[i])
// }
// console.log(types)

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     [`Michael`, `Peter`, `Steven`],
//     true,
//     false,
// ]
// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i])
// }

// for (let exercise = 1; exercise <= 4; exercise++) {
//     console.log(`----------- Starting exercise ${exercise}`)

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`lifting weight reppettitiom ${rep} ⛹️‍♀️`)
//     }
// }

//  Challenge 4

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

// const tips = []
// const totals = []

// const tipcalc = bill => bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100

// for (let i = 0; i < bills.length; i++) {
//     tips.push(tipcalc(bills[i]))
//     totals.push(bills[i] + tips[i])
// }

// function calcAverage(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i]
//     }
//     return sum / array.length
// }

// console.log(bills, tips, totals, calcAverage(totals))

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};

// const temp_info = [17, 21, 23]
const temp_info = [12, 5, -5, 0, 4]

const printForecast = function (arr) {
    let str = ``
    for(let i = 0; i < arr.length; i++) {
        str = str + `${arr[i]}ºC in ${i + 1} days ... `
    }
    console.log('... ' + str)
}

printForecast(temp_info)