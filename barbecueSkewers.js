/*You are in charge of a barbecue grill. A VEGETARIAN SKEWER is a skewer that has only vegetables (-o).
A NON-VEGETARIAN SKEWER is a skewer with at least one piece of meat (-x).
Write a function that returns [# vegetarian skewers, # non-vegetarian skewers]. For example,
the skewers const below should return [1, 4].
*/

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
