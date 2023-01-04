/*To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday.
He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run
the PREVIOUS Saturday. This is called a PROGRESS DAY.

Create a function that takes an array of miles run every Saturday and returns Johnny's total number
of progress days*/

const runs1 = [3, 4, 1, 2] //2 progress days
const runs2 = [10, 11, 12, 9, 10] //3 progress days
const runs3 = [6, 5, 4, 3, 2, 9] //1 progress day
const runs4 = [9 , 9] //0 progress days

function progressDays(array) {
    let progressDay = 0;
    for (let i = 0; i <= array.length; i++) {
        if(array[i] < array[i+1]) {
            progressDay++;
        }
    };
    console.log("John's had " + progressDay + " progress day(s).")
}

progressDays(runs1);