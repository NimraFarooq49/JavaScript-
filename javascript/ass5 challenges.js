////TASK:01-------
////FOR LOOP
console.log('Lifting weights repetition 1');
console.log('Lifting weights repetition 2');
console.log('Lifting weights repetition 3');
console.log('Lifting weights repetition 4');
console.log('Lifting weights repetition 5');
console.log('Lifting weights repetition 6');
console.log('Lifting weights repetition 7');
console.log('Lifting weights repetition 8');
console.log('Lifting weights repetition 9');
console.log('Lifting weights repetition 10');
 For loop runing while cond is true
for (let rep = 1; rep <= 10; rep++) {
    console.log(Lifting weights repetition ${ rep });
}

////TASK:02----
////Looping Array Continuing and Breaking =====

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schemendata',
    job: 'teacher',
    age: 2037 - 1991,
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true
};
const type = [];


const values = Object.values(jonas);

for (let i = 0; i < values.length; i++) {
    //reading jonas array---
    console.log(values[i], typeof values[i]);

    // // to know the data types of all variables of Jonas array---
    // type[i] = typeof values[i];
    type.push(typeof values[i]);
}
console.log(type);
// // Example
const year = [1991, 2004, 2020, 2025];
const ages = [];
const values = Object.values(year);
for (let i = 0; i < values.length; i++) {
    ages.push(2037 - year[i]);

}
console.log(ages);


// // continue and breake
console.log('ONLY STRINGS')
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schemendata',
    job: 'teacher',
    age: 2037 - 1991,
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true
};
const type = [];


const values = Object.values(jonas);

for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') continue;
    console.log(values[i], typeof values[i]);

};

// // break
console.log('BREAKING AT NUMBERS')
for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') break;
    console.log(values[i], typeof values[i]);

};

//nested loops and backward loops
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schemendata',
    job: 'teacher',
    age: 2037 - 1991,
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true
};
const values = Object.values(jonas);
for (let i = values.length - 1; i >= 0; i--) {

    console.log(i, values[i]);
}

// // loop within loop
for (let exercise = 1; exercise <= 4; exercise++) {
    console.log(----- Starting exercise ${ exercise });


    for (let rep = 0; rep < 6; rep++) {

        console.log(Excersice ${ exercise }: Lifting Weight reepetition ${ rep });
    }
}

// // //WHILE LOOP
for (let rep = 1; rep <= 10; rep++) {
    console.log(Lifting weights repetition ${ rep });
}
let rep = 1;
while (rep <= 10) {
    console.log(Lifting weights repetition ${ rep });
    rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;



while (dice !== 6) {
    console.log(You rolled a ${ dice });
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(Loop is about to end....);
}