// PART 2: BOUNCER AT A CLUB

// this function returns a value of the type "string"
// I think this is also a function that produces something, because console.log isn't directly written inside the function

function bouncerBot(age, numberCurrent, numberMaximum) {
    if (age < 18) {
        return `This is a club for adults.`;
    };
    if (numberCurrent < numberMaximum) {
        return `Come in!`;
    };
    return `It's too busy now, come back later.`;
};

const person1 = bouncerBot(17, 54, 100);
console.log(person1);

const person2 = bouncerBot(27, 54, 100);
console.log(person2);

const person3 = bouncerBot(27, 100, 100);
console.log(person3);

// If I write console.log directly into the function, I think this will be a function that does something.
// This function returns a value that is printed to the console. You can't use it somewhere else later on.

function bouncerBot2(age, numberCurrent, numberMaximum) {
    if (age < 18) {
        return console.log(`This is a club for adults.`);
    };
    if (numberCurrent < numberMaximum) {
        return console.log(`Come in!`);
    };
    return console.log(`It's too busy now, come back later.`);
};

const person4 = bouncerBot2(17, 54, 100);
const person5 = bouncerBot2(37, 100, 100);
const person6 = bouncerBot2(27, 54, 100);


// I can also make a function and use logical operators
// This is a function that does something. The returns are printed to the console.

function bouncerBot3(age, numberCurrent, numberMaximum) {
    if (age >= 18 && numberCurrent < numberMaximum) {
        return console.log(`Come in!`);
    } else if (age >= 18 && numberCurrent >= numberMaximum) {
        return console.log(`It's too busy now, come back later.`);
    };
    return console.log(`This is a club for adults.`);
};

const person7 = bouncerBot3(37, 100, 100);
const person8 = bouncerBot3(27, 54, 100);
const person9 = bouncerBot3(17, 54, 100);