/*Given an integer, create a function that returns the next prime.
If the number is prime, return the number itself*/

function nextPrimeNumber (n) {
    let i = n;
    while ((i%2) == 0 || (i%3) == 0 || (i%5) == 0 || (i%7) == 0) {
        if(n == 2 || n == 3 || n == 5 || n == 7){
            break;
        } else {
        i++; 
        } 
    } 
    console.log(i + " é primo.");
}

nextPrimeNumber(12);