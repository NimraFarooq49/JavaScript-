const firstName = 'jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm" + firstName + ' , a ' + (year - birthYear) + ' years old ' + job + ' ! ';
console.log(jonas);
const jonasNew = "I 'm ${firstName}, a ${year - birthYear} year old ${job}!";
console.log(jonasNew);

console.log('just a regular string...');

console.log('string with \n\ multiple \n\ lines');

console.log('string multipe lines');

const age = 15;

if(age >= 18){
    console.log('sarch can start driving license');
}
else{
    const yearsleft = 18 - age;
    console.log(`sarch is too young. wait another $ {yearsLeft} years :)` );
}

const birthYear = 2012;

let century;
if(birthYear <= 2000){
   century = 20; 
}
else{
    century = 21;
}
console.log(century);

 const marksMass = 95;
 const marksHeight = 1.88;
 const johnsMass = 85;
 const johnsHeight = 1.76;
 marksBMI = marksMass / marksHeight ** 2;
 johnsBMI = johnsMass / (johnsHeight * johnsHeight);
 const markHigherBMI = (marksBMI > johnsBMI);
 console.log(marksBMI, johnsBMI, markHigherBMI);
if (marksBMI > johnsBMI) {
    console.log(marks bmi (${marksBMI}) is higher then jhons(${johnsBMI}));
}
else {
    console.log(jhons bmi(${johnsBMI}) is higher then marks(${marksBMI}));
 }


//type conversion
const inputYear = '1991'  ;
console.log(number(inputYear), inputYear);
console.log(number(inputYear),  +18);

console.log(number('jonas'));
console.log(string(23) ,23);

//type correction
console.log('I m' + 23 + 'years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;
n=n-1;
console.log(n)

// 5 falsy values : 0

console.log(boolean(0));
console.log(boolean(undefined));
console.log(boolean('jonas'));
console.log(boolean ({}));
console.log(boolean(' '));

const money = 100;
if(money){
    console.log("don't spend it all ;)");
}
else{
    console.log('you should get a job!');
}

let height=0;
if(height){
    console.log('yay! height is defined');
}
else{
    console.log('height id undefined')
}

//equality operators
const age = '18';
if(age===18) console.log('you just became an adult:D (strict)');
if(age==18) console.log('you just became an adult:D (loose)');

const favourite=prompt("whats's your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if(favourite===23){
    console.log('cool! 23 is an amazing number!')
}
else if(favourite===7){
    console.log('7 is also a cool number')
}
else if(favourite===9){
      console.log('9 is also a cool number')
}
else{
    console.log('number is noy 23 or 7')
}

if(favourite !==23) console.log('why not 23?');

// logical operations
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision );
console.log(hasDriversLicense || hasGoodVision );

console.log(!hasDriversLicense);

//if(hasDriversLicense && hasGoodVision){
//    console.log('sarah is able to drive!');
//}
//else{
//    console.log('someone else should drive...');
//}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);


if(hasDriversLicense && hasGoodVision && !isTired){
   console.log('sarah is able to drive!');
}
else{
   console.log('someone else should drive...');
}

//challenge 3
 const scoreDolphin = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
 console.log(scoreDolphin, scoreKoalas);
 if (scoreDolphin > scoreKoalas) {
     console.log('dolphins win the trophy');
 }
 else if (scoreKoalas > scoreDolphin) {
    console.log('koalas win the trophy');
}
else if (scoreDolphin === scoreKoalas) {
    console.log('both wins the trophy!');
 }
//bonas

const scoredolphins=(97+112+80) / 3;
const scorekoalas=(109+95+50) / 3;
console.log( scoredolphins, scorekoalas);

if( scoredolphins > scorekoalas && scoredolphins >=100){
    console.log('dolphins wwin the trophy');
}
else if(scoredolphins > scorekoalas && scorekolas >= 100){
     console.log('koalas wwin the trophy');
}
else if(scoredolphins === scorekoalas && scoredolphins >= 100 && scorekoalas >= 100){
     console.log('both wwin the trophy');
}
else{
    console.log('no one wins the trophy');
}

