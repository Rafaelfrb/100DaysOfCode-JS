/*Find the word "Nemo" inside a string of words.
Return a string like this: "I found Nemo at [the order of the word you find nemo]!"
If you can't find Nemo, return "I can't find Nemo : (".
*/

const string = 'He is Nemo and I am';



function findingNemo(str) {
    const array = str.split(/[^a-zA-Z0-9]+/);
    if(!array.includes("Nemo")) {
        console.log("I can't find Nemo : (");
    } else {
        console.log("I found Nemo at " + (array.indexOf("Nemo") + 1));
    };
};

findingNemo(string);

findingNemo("My name is Nemo");

findingNemo("I am not finding it")



