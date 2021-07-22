// PART 3: CALCULATING THE AVERAGE

// this is a function with a return statement that produces something: the average of numbers
// this function returns a value of the type "number", that could be used somewhere else in the code

function calculateAverage (numbers) {
    const sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]; // there must be a smarter way to do this...
    const average = sum / numbers.length;
    const averageRounded = Math.round (average);
    return averageRounded; 
};

const array1 = [7, 4, 8, 6, 9];
console.log(calculateAverage(array1));

const array2 = [1, 2, 3, 4, 5];
console.log(calculateAverage(array2));

const array3 = [6.8, 7.5, 8.0, 5.3, 8.2];
const averageArray3 = calculateAverage(array3); // I am not sure if this step is a necessity; probably this will be explained later on in the course
console.log(averageArray3);