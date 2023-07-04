'use strict' // used in the beginning of scripts to avoid bugs
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log('Tnajem tsou9 ! ')
*/
/*
function fruitProcessor(bananas, oranges) {
    const juice = `Juice with ${bananas} bananas and ${oranges} oranges.`;
    return juice;
}
const fruitJuice = fruitProcessor(5, 0);   
console.log(fruitJuice)

const fruitJuice2 = fruitProcessor(3, 2);
console.log(fruitJuice2)
 */

/*
//function declaration
function calcAge1(Birthyear) {
    return 2023 - Birthyear;
    
}
const age1 = calcAge1(2001);
 
//function expression 
const  calcAge2 = function (Birthyear) {
    return 2034 - Birthyear;
}
const age2 = calcAge2(1991)
console.log(age1, age2); 
*/
/*
function calcNewPrice(Oldprice) {
    return Oldprice - (Oldprice * 0.15);
}
const newPrice = calcNewPrice(22);
console.log(newPrice);


const calcNewPrice2 = function (Oldprice) {
      return Oldprice - (Oldprice * 0.15);
}
const newPrice2 = calcNewPrice2(46)
console.log(newPrice2, newPrice);
*/ 
//Arrow functions
/*
const calcAge3 = Birthyear => 2023 - Birthyear; 
const age3 = calcAge3(2001);
console.log(age3);


const yearsUntilRetirement = (Birthyear, firstname )=> {
    const age = 2023 - Birthyear;
    const retirement = 65 - age
    return `${firstname} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(2001, 'yosri'));
console.log(yearsUntilRetirement(1991, 'Bohmiid'));
*/ 

/*

function cutFruitPieces(fruit) {
    return fruit * 4
    
}


function fruitProcessor(bananas, oranges   ) {
    const bananasPieces = cutFruitPieces(bananas);
    const orangesPices = cutFruitPieces(oranges);
    const juice = `Juice with ${bananasPieces} bananas and ${orangesPices} oranges.`;
    return juice;
}
fruitProcessor(4, 6)
console.log(fruitProcessor(4, 6));
*/
/*

const calcAge = function(Birthyear) {
    return 2023 - Birthyear;
}


const yearsUntilRetirement = function (Birthyear, firstName) {
    const age = calcAge(Birthyear)
    const retirement = 65 - age;
    if (retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`); 
        return retirement;
    } else {
        g
        return -1;
    }

}
console.log(yearsUntilRetirement(1999, 'Yosri'))
console.log(yearsUntilRetirement(1920, 'Sofien'))

*/
const calcAverage = (score1, score2, score3) =>  {
    (score1 + score2 + score3) / 3
 }
 
 
 const scoreDolphins = calcAverage(84, 54, 41);
 const scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = function(scoreDolphins, scoreKoalas) {
    
     if (scoreDolphins >= 2 * scoreKoalas ) {
         console.log(`Dolphins win (${scoreDolphins} VS ${scoreKoalas})`)
     } else if  (scoreKoalas >= 2 * scoreDolphins) {

            console.log(`Dolphins win ( ${scoreDolphins} VS ${scoreKoalas}`)
         } else {
         console.log("No team wins !")
     }
 
     
 }
 checkWinner(scoreDolphins, scoreKoalas);
 checkWinner(688, 9923);
 