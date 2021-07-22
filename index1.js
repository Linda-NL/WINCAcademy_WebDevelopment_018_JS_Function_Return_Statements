// PART 1: CHECKING IF A NUMBER IS BIG

// this is a function with a return statement that produces something
// this function returns a value of the type "number"

function checkIfBiggerThan100(number) {
    if (number > 100) {
        return true;
    };
    return false;
};

const numberCheck1 = checkIfBiggerThan100(54);
console.log(numberCheck1);

const numberCheck2 = checkIfBiggerThan100(101);
console.log(numberCheck2);

const numberCheck3 = checkIfBiggerThan100(1056473294781);
console.log(numberCheck3);

const numberCheck4 = checkIfBiggerThan100(100); // this statement will be false because 100 is not bigger than 100
console.log(numberCheck4);