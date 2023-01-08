/*Given a string containing number 2-9 inclusive, return all possible letter combinations
that the number could represent. Return the answer in any order.
Example: 
input: digits = "23"
output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf",]
*/

function letterCombinations (input) {
    let values = {
        2 : ["a", "b", "c"],
        3 : ["d", "e", "f"],
        4 : ["g", "h", "i"],
        5 : ["j", "k", "l"],
        6 : ["m", "n", "o"],
        7 : ["p", "q", "r", "s"],
        8 : ["t", "u", "v"],
        9 : ["w", "x", "y", "z"]
    }

    let newArray = [];
    console.log(newArray);

    if(input.includes('1') || input.includes('0')) {
        return console.log("Please, only enter numbers between 2 and 9")
    } else if (input.length > 4){
        return console.log("Please, enter between 2 and 4 digits.")
    }

    let inputList = input.split(''); //['2', '3']
    console.log(inputList);

    for(let i = 0; i <= inputList.length; i++){
        console.log(typeof inputList[i]);
        console.log(`${values.inputList[i]}`);

        //${Number(${inputList[i]})}}
    };

    





}



letterCombinations('23');
