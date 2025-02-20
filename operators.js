//and (&&)
//additional operator(+)
//subtract operator(-)
//multiply operator(*)
//divide operator(/)
//modulus operator(%)
//increment operator(++)
//decrement operator(--)
//equal operator(==)
//not equal operator(!=)
//greater than operator(>)
//less than operator(<)
//greater than or equal to operator(>=)
//less than or equal to operator(<=)


//six categories
//1.Assignment operators
//equals operator(=)
//less than or equal to operator(<=)
//greater than or equal to operator(>=)
//decrement operator(--)

/*comparison operators
decrement operator(--)
less than or equal to operator(<=)
strict equality operator(===)

*/

/*arithmetic operators

increment operator(++)
addition operator(+)
subtraction operator(-)
multiplication operator(*)
division operator(/)
*/

let pricePerKg =5000;
let quantity =10;
let total = pricePerKg * quantity;
console.log(total);

let discount = 500;
let totalcost = total - discount;
console.log(totalcost);

//comparison
let buyermoney = 100000;
let balance = buyermoney - totalcost;
buyermoney>=balance;
console.log(balance);

//logical operators
//and
//or

//logical operators
let stockIsAvailable = true;
let buyerIsLegit = false;
console.log(buyerIsLegit);

//concatenation operators
let buyerName = "Sitati"
let productName = "Mangoes"
let receiptMessage = "Thank you for your purchase " +  buyerName  +  "you have purchased"  + quantity  +  productName;
console.log(receiptMessage);

//assignment operators
let stock = 100;
let sales = 10;
stock = stock - sales;
stock-=sales;
console.log(stock-sales);

let salesRevenue = 0;
//salesRevenue=salesRevenue+totalcost;
salesRevenue+=totalcost;
console.log(salesRevenue);
















