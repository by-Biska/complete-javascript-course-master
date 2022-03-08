// let js = 'amazing'
// if (js === 'amazing') alert('pidor')

// Challenge 1 
/**
 * @param num The number to round
 * @param precision The number of decimal places to preserve
 */
//  function roundUp(num, precision) {
//     precision = Math.pow(10, precision)
//     return Math.ceil(num * precision) / precision
//   }

// const markHeight = 1.69, johnHeight = 1.95, markWeight = 78, johnWeight = 92

// const markBMI = markWeight / markHeight ** 2
// const johnBMI = johnWeight / johnHeight ** 2

// const markHigherBMI = markBMI > johnBMI;
// if(markHigherBMI === true) {
//     console.log(`Mark's (${roundUp(markBMI, 2)}) is higher than John's (${roundUp(johnBMI, 2)})`)
// } else {
//     console.log(`John's (${roundUp(johnBMI, 2)}) is higher than Mark's (${roundUp(markBMI, 2)})`)
// }

// const firstname = 'John'
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const johnNew = `I'm ${firstname}, a ${year - birthYear} year old ${job}`
// console.log(johnNew)

// console.log(`String
// multiple
// lines`)


// const inutYear = '1991'
// console.log (Number(inutYear) + 18)


// Chellenge 3 
// const culcAverage = (first_game, second_game, thrid_game) => (first_game + second_game + thrid_game) / 3

// function checkWinner(dolphin_avg, coalas_avg) {
//     if (dolphin_avg > coalas_avg && dolphin_avg >= 100) {
//         console.log(`Dolphin win ${dolphin_avg} vs. ${coalas_avg}`)
//     } else if (coalas_avg > dolphin_avg && coalas_avg >= 100) {
//         console.log(`Koalas win ${coalas_avg} vs. ${dolphin_avg}`)
//     } else if (dolphin_avg === coalas_avg && dolphin_avg >= 100 && coalas_avg >= 100) {
//         console.log(`it's a draw`)
//     } else {
//         console.log(`No one wins`)
//     }
// }

// Data 1
// const dolphin_score = culcAverage(96, 108, 89)
// const coalas_score = culcAverage(88, 91, 110)
// Data 2
// const dolphin_score = culcAverage(97, 112, 101)
// const coalas_score = culcAverage(109, 95, 123)
// Data 3
// const dolphin_score = culcAverage(97, 112, 101)
// const coalas_score = culcAverage(109, 95, 106)

// checkWinner(dolphin_score, coalas_score);


// const day = 'monday'

// switch(day) {
//     case 'monday':
//         console.log(`Plan course structure`)
//         console.log(`Go to coding meetup`)
//         break
//     case 'tuesday':
//         console.log(`sdfsfdsf`)
//         break
//     case 'wednesday':
//         console.log(`123432`)
//         break
//     case 'thursday':
//         console.log(`жопа`)
//         break
//     case 'friday':
//         console.log(`жопа`)
//         break
//     case 'saturday':
//         console.log(`my life`)
//         break
//     case 'sunday':
//         console.log(`WHYYYYYYYY?`)
//         break
//     default:
//         console.log(`You in Matrix`)
// }

// const age = 23
// age >= 18 ? console.log(`I like to drink wine 🍷`) : console.log(`I like to drink water 💧`)

// const drink = age >= 18 ?`wine 🍷` : `water 💧`
// console.log(drink)

// Chellenge 4

const bill = 275
// const bill = 40
// const bill = 430

const tipcalc =  bill =>  bill >=50 && bill <= 300 ? bill * 15 / 100 :  bill * 20 / 100

console.log(`The bill was ${bill}, the tip was ${tipcalc(bill)}, and the total value ${bill + tipcalc(bill)}`)
