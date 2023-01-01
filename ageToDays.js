//Use 365 days as length of year
//Ignore leap years and days between last birthday and now
//Expect only positive integer inputs

function ageCalculator(age) {
    if(age < 0 || !Number.isInteger(age)){
        console.log('Please insert an integer positive number.')
    } else {
        return age * 365;
    }
};

console.log(ageCalculator(65));

console.log(ageCalculator(0));

console.log(ageCalculator(20));



