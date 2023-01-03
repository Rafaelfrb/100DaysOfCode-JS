const skewers = [
    "--xo--x--ox--",
    "--xx--x--xx--",
    "--oo--o--oo--",
    "--xx--x--ox--",
    "--xx--x--ox--"
];

function skewerSeparator(array) {
    let vegetarian = 0;
    let nonVegetarian = 0;

    for (let i=0; i < array.length; i++){
        if(array[i].includes("x")){
             nonVegetarian = nonVegetarian + 1;
        } else {
             vegetarian = vegetarian + 1;
         }
    };
    return [vegetarian, nonVegetarian];
};

console.log(skewerSeparator(skewers));
