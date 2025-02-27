/*function sayhello(){
    return
}
sayhello()*/

//function to add two numbers without parameters
/*function add(){
let a= 10;
let b= 10;
let c= 50
let sum = a+b+c;
console.log(sum);
}
add()*/

/*function add(a,b,c){
    let sum=a+b+c;
    return sum;
}
console.log(add(10,10,50));*/

//function square
/*function square(a){
    return a*a;
}
console.log(square(10));
square(10)*/

/*function calculateTotalCost( produce, pricePerkg, Quantity){
    let totalCost =pricePerkg * Quantity;
    console.log("The total cost of " +  Quantity + " kg of " + produce + "is" + totalCost + "Ugx");
}
calculateTotalCost("maize", 2000, 5)
calculateTotalCost("beans",6000 ,5)
calculateTotalCost("soybeans",7000 ,5) */

function calculateTotalCost(produce, pricePerkg, Quantity) {
    let totalCost = pricePerkg * Quantity;
    console.log("The total cost of " + Quantity + " kg of " + produce + " is " + totalCost + " Ugx");
}

calculateTotalCost("maize", 3700, 5);
calculateTotalCost("beans", 6000, 5);
calculateTotalCost("soybeans", 5900, 5);
