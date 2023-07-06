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
/*
const calcAverage = (score1, score2, score3) =>  {
    (score1 + score2 + score3) / 3
 }
 
 
 let scoreDolphins = calcAverage(44, 23, 71);
 let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function(scoreDolphins, scoreKoalas) {
    
     if (scoreDolphins >= 2 * scoreKoalas ) {
         console.log(`Dolphins win (${scoreDolphins} VS ${scoreKoalas})`)
     } else if  (scoreKoalas >= 2 * scoreDolphins) {

            console.log(`Koalas win ( ${scoreDolphins} VS ${scoreKoalas})`)
         } else {
         console.log("No team wins !")
     }
 
     
 }
 checkWinner(scoreDolphins, scoreKoalas);
 checkWinner(688, 23);
 
 //TEST 2 

 scoreDolphins = calcAverage(85, 54, 41);
 scoreKoalas = calcAverage(23, 34, 27);
 console.log(scoreDolphins, scoreKoalas);
 checkWinner(scoreDolphins, scoreKoalas);
 */

//exemples of functions calling other function************************************************************************************
/*
function getPower(number) {
    return Math.pow(number, 2);
}

function addPower(num1, num2, num3, num4) { // 
   return getPower(num1) + getPower(num2) + getPower(num3) + getPower(num4); //parameters of getPower functions has been changed with addPower function

}
console.log(addPower(4, 3, 6, 5)); 
*/
/*
const tipValue = function(pricess){
    return prices * 0.12
}

const  priczs = [price1, price2, price3, price4] 
const calcTip1 = tipValue(prices[0])
const calcTip2 = tipValue(prices[1])
const calcTip3 = tipValue(prices[prices.length-1])

console.log(calcTip1, calcTip2, calcTip3);

/*
function calculateNewPriceWithTip(prices, tipPercentage) {
    return prices.map(price => price + (price * (tipPercentage / 100)));
  } 
  
  
  let prices = [10, 20, 30, 40];
  let tipPercentage = 15;
  
  let newPrices = calculateNewPriceWithTip(prices, tipPercentage);
  console.log(newPrices); 


/*
// ARRAYS : storing multp values inside a variable, which called an array
 const friend1 = 'Sami';
 const friend2 = 'Issa';
 const friend3 = 'Mohamed';
 
 const friends = ['Sami', 'Issa', 'Mohamed'];
 console.log(friends);
 
 const y = new Array(1999, 1997, 2001, 2000);
 
 console.log(friends[0]);
 console.log(friends[2]);
 
 console.log(friends.length);
 console.log(friends[friends.length - 1]);
 
 friends[2] = 'Emir';
 console.log(friends);

 const firstName = 'Yossry';
 const me = [firstName, 'Fathallah', 2023 - 2001, 'student', friends ];
 console.log(me);
 console.log(me.length)

 */ 
/*

 // ARRAYS METHODS **********************************************************************************************************


 // Add Elements
const barcaPlayers = ['Messi', 'Neymar', 'Rivaldo', 'Ronaldinho'];
barcaPlayers.push('Iniesta');    //.push = add at the end of the array
barcaPlayers.unshift('Maradona'); //.unshift = add at the beginning of the array
console.log('These are my favourite barça player in the history' ,barcaPlayers);

// Remove Elements

 const player1 = barcaPlayers.pop(); // .pop remove the last occurence, if we log it to the console it will be return that occurence
 const player2= barcaPlayers.pop();
 console.log(barcaPlayers);
 console.log(player1);
 console.log(player2);

barcaPlayers.shift(); // FIRST
console.log(barcaPlayers);
console.log(barcaPlayers.indexOf('Rivaldo')); // .indexOf returns the position of the occrence in the array
console.log(barcaPlayers.includes('Neymar')); // .includes returns true if the player exist in the array, if not it
returns false
 console.log(barcaPlayers);

*/
/*
//CODE CHALLENGE : ARRAYS ********************************************************************************************************
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2 }
 

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];// calcTip(bills[0]), means calculting the tip of the bill in the position 0 'first bill in prev array
const totals = [bills[0] + tips [0], bills[1] + tips [1], bills[2] + tips [2]]; // that's how we calculate two values from two diff arrays and store them into another array
console.log(bills, tips, totals);
*/
 
// OBJECTS********************************************************************************************************

const yosri = {
    lastName: 'Yossry',
    firstName: 'Fathallah',
    age: '22',
    doForLiving: 'stuck in school',
    car: 'NONE',
    friends:['Sofien', 'Saif', 'Louay', 'Yasmine'],
}
console.log(yosri);

console.log(yosri['firstName']);

const nameKey = 'Name';
console.log(yosri['last' + nameKey]);
console.log(yosri['first' + nameKey]);


//CHALLEGNGE**************************************************************************************************
//Yosri have 4 friends and his best friend is Louay

// console.log(yosri['first' + nameKey] );

console.log(`${yosri['last' + nameKey]} have ${yosri.friends.length}  firends and his best friend is ${yosri.friends[2]} `);



//ARRAYS, Objects + functions exercices

const me = {
    fullName: 'Yosri Fathallah',
    mass: 68,
    height: 1.75,
    calcBMI: function () {
      this.bmi = this.mass / this.height ** 2;
      return this.bmi;
    }
  };
  
  const jhn = {
    fullName: 'Sofiene Gaddour',
    mass: 75,
    height: 1.77,
    calcBMI: function () {
      this.bmi = this.mass / this.height ** 2;
      return this.bmi;
    }
  };
  
  me.calcBMI();
  jhn.calcBMI();
  
  console.log(me.bmi, jhn.bmi);
  
  // "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
  
  if (me.bmi > jhn.bmi) {
    console.log(`${me.fullName}'s BMI (${me.bmi}) is higher than ${jhn.fullName}'s BMI (${jhn.bmi})`)
  } else if (jhn.bmi > me.bmi) {
    console.log(`${jhn.fullName}'s BMI (${jhn.bmi}) is higher than ${me.fullName}'s BMI (${me.bmi})`)
  }

  
  



