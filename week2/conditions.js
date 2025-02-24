//if (condition){
    // tis part of code runs if the condition true//
//};

//example with number variable
let number = 6;
if (number>0) {
    console.log(`${number} is apositive integer`);
};

//example with string variable
let weather = "raining";
if (weather === "raining"){
    console.log("remember to caryy your raincoat");
};

//example with boolean variable
let isRaining = true;
if (isRaining) {
    console.log("remember to carry a raincoat")

};

let isRainingOne = true;
if (isRainingOne) {
    console.log("remember to carry a raincoat")
}else {
    console.log ("yo dont need a raincoat")
};


let numberTwo = -6;
if (numberTwo>0) {
    console.log(`${number} is apositive integer`);
}else {
    console.log(`${numberTwo} is a negative integer`);
};

//else if
let weatherNow = "sunny";
if (weatherNow === "rainy"){
    console.log("carry a raincoat")
} else if (weatherNow === "cloudy"){
    console.log("you might need and raincoat");
}else if (weatherNow === "sunny"){
    console.log("no need for a raincoat!")
}else {
    console.log("take your time")
};