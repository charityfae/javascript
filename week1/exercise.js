//comments can make code readable

//welcome to CES javascript class

/*comments can make code readable ,
easy to reuse and informative*/

//1
console.log(4 > 3);       
console.log(4 >= 3);     
console.log(4 < 3);      
console.log(4 <= 3);     
console.log(4 == 4);     
console.log(4 === 4);   
console.log(4 != 4);    
console.log(4 !== 4);  
console.log(4 != '4'); 
console.log(4 == '4'); 
console.log(4 === '4');



// 1. 
let challenge = '30 Days Of JavaScript';

// 2. 
console.log(challenge);

// 3. 
console.log(challenge.length);

// 4. 
console.log(challenge.toUpperCase());

// 5. 
console.log(challenge.toLowerCase());

// 6. 
console.log(challenge.substring(3)); 

// 7. 
console.log(challenge.substring(3, challenge.length)); 

// 8. 
console.log(challenge.includes("Script")); 

// 9. 
console.log(challenge.split(''));  

// 10. 
console.log(challenge.split(' ')); 

// 11. 
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));  

// 12. 
console.log(challenge.replace("JavaScript", "Python")); 

//ex 3
let myAge = 250;
let yourAge = 25;

let ageDifference = myAge - yourAge;

console.log(`I am ${ageDifference} years older than you.`);

//ex 4 


// 1. Character at index 15
console.log(challenge.charAt(15));  

// 2. Character code of 'J'
console.log(challenge.charCodeAt(challenge.indexOf('J')));  

// 3. First occurrence of 'a'
console.log(challenge.indexOf('a')); 

// 4. Last occurrence of 'a'
console.log(challenge.lastIndexOf('a'));  

// 5. First occurrence of 'because'
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));  

// 6. Last occurrence of 'because'
console.log(sentence.lastIndexOf('because'));  

// 7. Using search() to find the first occurrence of 'because'
console.log(sentence.search('because'));  

// 8. Removing trailing whitespace using trim()
let stringWithSpaces = ' 30 Days Of JavaScript ';
console.log(stringWithSpaces.trim());  

//ex 5
let challenge2 = '30 Days Of JavaScript';

// 1. Using startsWith() to check if the string starts with '30'
console.log(challenge.startsWith('30'));  

// 2. Using endsWith() to check if the string ends with 'JavaScript'
console.log(challenge.endsWith('JavaScript'));  

// 3. Using match() to find all occurrences of 'a'
console.log(challenge.match(/a/g));  

// 4. Using concat() to merge two strings
let part1 = '30 Days Of';
let part2 = ' JavaScript';
console.log(part1.concat(part2)); 

// 5. Using repeat() to print the string twice
console.log(challenge.repeat(2));  

//ex 6
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

//ex 7
// 1. Declare variables and check data types using typeof
let firstName = "ojera";
let lastName = "charity";
let country = "Uganda";
let city = "kampala";
let age = 25;
let isMarried = false;
let year = 2025;

console.log(typeof firstName);  
console.log(typeof lastName);   
console.log(typeof country);    
console.log(typeof city);       
console.log(typeof age);        
console.log(typeof isMarried);  
console.log(typeof year);       

// 2. Check if type of '10' is equal to 10
console.log(typeof '10' === typeof 10);  

// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10); 

// 4. Three truthy values
console.log(1);          
console.log("Hello");    
console.log([]);         

// 5. Three falsy values
console.log(0);          
console.log("");         
console.log(null);       

//ex 8
// Create a Date object for the current date and time
let now = new Date();

// 1. Get the current year
console.log(now.getFullYear());  

// 2. Get the current month as a number (0 = January, 11 = December)
console.log(now.getMonth() + 1);  
// 3. Get the current date (day of the month)
console.log(now.getDate());

// 4. Get the current day of the week as a number (0 = Sunday, 6 = Saturday)
console.log(now.getDay());

//ex 9
// Prompt user to enter base and height
let base = parseFloat(prompt("Enter base:"));
let height=parseFloat(prompt("Enter height:"));

// Calculate the area
let area = 0.5 * base * height;

// Display the result
console.log(`The area of the triangle is ${area}`);
alert(`The area of the triangle is ${area}`);

//ex 10




