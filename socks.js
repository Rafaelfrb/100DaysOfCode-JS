//Joseph is in the middle of packing for a vacation. He's having a bit of trouble finding all of his socks, though.
//Write a function that returns the number of sock pairs he has.
//A sock pair consists of two of the same letter, such as "AA". The socks are represented as an unordered sequence.
//If given an empty string (no socks in drawer) return 0.


let drawer1 = "AA";
let drawer2 = "ABABC";
let drawer3 = "CABBACCC";

function sockSeparator(string) {
 let separator = string.split("");
 let socksA = 0;
 let socksB = 0;
 let socksC = 0;

 for(let i = 0; i < separator.length; i++) {
    if(separator[i] == "A") {
        socksA++;
    } else if (separator[i] == "B") {
        socksB++;
    } else if (separator[i] == "C") {
        socksC++;
    }
 }
    console.log(Math.trunc((socksA/2)) + Math.trunc((socksB/2)) + Math.trunc((socksC/2)));
};

sockSeparator(drawer1);
sockSeparator(drawer2);
sockSeparator(drawer3);
