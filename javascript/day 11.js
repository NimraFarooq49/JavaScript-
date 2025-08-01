"use strict";

//scope and scope chain
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age},born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //creating new variable with same name as outer scope's variable
      const firstName = "Steven";

      // Reassigning outer scope's variable
      output = "new output!";

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str);
    console.log(millenial);
    //console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

//hosting and TDZ
const firstName = "Jonas";
calcAge(1991);
//console.log(age);
//printAge();

// variables
console.log(me);
//console.log(job);
//console.log(year);

var me = "Jonas";
let job = "teacher";
const year = 1991;

//functions
console.log(addDecl(2, 3));
//console.log(addExpr(2,3));
console.log(addArrow(2, 3));
//console.log(addArrow(2,3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example

console.log(undefined);
if (!numproducts) deleteShoppingCart();

var numproducts = 10;

function deleteShoppingCart() {
  console.log("All prducts deleted!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

//this keyword
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
