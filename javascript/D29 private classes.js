"use strict";

class Account {
  constructor(owner, pin, birthYear) {
    this.owner = owner;
    this.pin = pin;
    this.birthYear = birthYear;
    //now for movements like deposits and withdrawals
    this._movements = []; //by default it is an empty array but can be modified later
  }

  //method for deposit
  deposit(val) {
    this._movements.push(val);
    console.log(`${val} deposited successfully`);
  }

  //method for withdrawal
  withdrawal(val) {
    this._movements.push(-val);
    console.log(`${val} withdrawn successfully`);
  }
}

const nimra = new Account("nimra", 1111, 2005);

//Bad practice: directly modifying protected property
nimra._movements.push(25);

//Good practice: using the method
nimra.deposit(25);

console.log(nimra);
