/* 1. 
Write a function that takes a ph value and 
returns whether the value is acidic, neutral or alkaline. 
(PH value < 7 is acidic, 7 is neutral, > 7 alkaline)
*/
function myPh (ph) {
    if (ph > 7 && ph <= 14) {
        result = "alkaline";
    } else if (ph < 7 && ph > 0) {
        result = "acidic";
    } else if (ph == 7) {
        result = "neutral";
    } else {
        result = "ph should be between 0 and 14";

    }
    return result;

}
console.log(myPh(14));

/* 2.
Write a function that takes price and discount percentage as parameters and 
calculates the discounted price. 
The function should give an error message if the price or percentage are < 0. 
(e.g. If price = 30€, discount = 50%, new price should be 15€)

15 = 30 - (30 * (50 / 100)); 
*/
function myDiscount(price, percentage) {
    if (price <= 0 || percentage < 0) {
        newPrice = "price and percentage should be greater than 0";
    } else {
        newPrice = price - (price * percentage/100);
    
    }
    return newPrice;
    

}
console.log(myDiscount(30, 50));

/* 3. 
You want to buy something from an online shop. 
The seller charges different prices for shipping cost based on location. 
The shipping cost is 5€ for EU,  15€ for US & Canada, 20€ else where. 
Write a function that takes the cost of the product and location. 
It should print the amount of money you have to pay as:
"You have to pay a total of 35€, 30€ for the product and 5€ for shipping"
*/
function myShippingCost(product, location) {
    if (location == "eu") {
        price = 5 + product;
        console.log("You have to pay a total of " + price + "€, " + product + "€ for the product and 5€ for shipping");
    }else if (location == "us" || "united state" || "canada") {
        price = 15 + product;
        console.log("You have to pay a total of " + price + "€, " + product + "€ for the product and 15€ for shipping");
        
    }else {
        price = 20 + product;
        console.log("You have to pay a total of " + price + "€, " + product + "€ for the product and 20€ for shipping");
    }
    return price;
}

myShippingCost(30, "eu");

/* 4. 
Write a function that prints this version of children's song
"10 in the bed, the little one said rollover, 1 fell off" 
"9 in the bed.."
"8 in the bed.."
...
"1 in the bed, the little on said I am lonely!"

"The little one said, Everybody back on the bed!"
*/
function childrenSong() {  
    for (i = 10; i >= 1; --i) {
      if (i == 1) {
        rollover = i + " in the bed, The little on said I am lonely!";
      } else {
        rollover = i + " in the bed, the little one said rollover, 1 fell off";
      }
      console.log(rollover);
      
    } 
    console.log("The little one said, Everybody back on the bed!")
  }
  childrenSong();
/* 5. 
Write a function that calculates the area of a triangle 
*/
function area(base, height) {
    let area = (base * height) / 2;
    if(base <= 0 || height <= 0) { 
        result = ("The variable should be positive");

    } else {
        
        result = ("The area of the triangle is " + area);
    }
    return result;
    

}
console.log(area(10, 10));

/* 6. 
Create a program that:
Calculates the sum of 1+2+3+4...+98+99
Prints the sum of 1+2+3+4...+98+99
Output: "The sum is 4950"
*/
let number = 0;
for (let num = 1; num < 100; num++) {
    number = number + num;
}

console.log(number);

/* 7. 
Calculates the sum of 1+3+5+7...+99+101
Prints the sum of 1+3+5+7...+99+101
Output: "The sum is 2601"

*/
let number2 = 0;
for (let num = 1; num < 102; num += 2) {
    number2 = number2 + num;
}

console.log(number2);
/*
8. Calculator
Write a simple calculator program that calculates 
the difference, sum or product of two numbers. 

The function takes as a parameter, the type of calculation to perform and two numbers.

Then based on the type of calculation given 
(addition, subtraction, multiplication, division), 
it performs the calculation and returns the result. 
*/
function myCalculator(number1, operator, number2) {
    if (operator == '+') {
        result = number1 + number2;
    } else if (operator == '-') {
        result = number1 - number2;
    } else if (operator == '*') {
        result = number1 * number2;
    } else if (operator == '/') {
        result = number1 / number2;
    }
    return result;
    
}
console.log(myCalculator(100, '*', 3));

/* 9. 
Write a function that takes three numbers and write two more functions 
which calculate and return the largest and smallest of these numbers.
The first function should print what is returned from 
the functions largest and smallest.
*/
function maxMin(a, b, c) {

    function largest(a, b, c){
       if (a > b && a > c ) {
           result = "The largest number is " + a;
        } else if(b > a && b > c) {
            result = "The largest number is " + b;
        } else if(c > a && c > b) {
            result = "The largest number is " + c;  
        }
        return result;

    }
    
    function smallest(a, b, c){
        if (a < b && a < c) {
            result = "The smallest number is " + a;
        } else if(b < a && b < c) {
            result = "The smallest number is " + b;
        } else if ( c < a && c < b) {
            result = "The smallest number is " + c;
        }
        return result;
       
    }
    return largest(a, b, c) + " & " +  smallest(a, b, c);
}

console.log(maxMin(8, -8, 0));
/*
10. Leap year calculator. Write a function that takes a year and determines if it is a leap year or not
How to determine whether a year is a leap year 
To determine whether a year is a leap year, follow these steps:
1. If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
2. If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
3. If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
4. The year is a leap year (it has 366 days).
5. The year is not a leap year (it has 365 days).
*/

function leapYearCalculator(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0 ) {
            if (year % 400 == 0) {
                result = "Leap Year";
                console.log(year + " is a leap year");
    
               } else {
                  result = "Not a leap Year";
                  console.log(year + " is  not a leap year");
               }
        } else {
            result = "Leap Year";
            console.log(year + " is a leap year");
        }

    } else {
        result = "Not a leap Year"
        console.log(year + " is not a leap year");
    }
    return result;
}

leapYearCalculator(2020);

/* 11. 
Write a function that takes a parameter array of working hours 
(e.g. [4, 5, 7.5, 8.5, 9, 6]), 
the function should return the sum of the working hours.
*/


function sumOfWorkingHour(hours) {
    let sum = 0
    for (let number of hours) { //for of loop
        sum = sum + number;
    }
         
    return sum;

}
console.log(sumOfWorkingHour([4, 5, 7.5, 8.5, 9, 6]));

/* 12. 
(The science of this might not be accurate)
Write a function that takes DNA strand as a parameter. 
The four nucleotides found in DNA are 
adenine (A), cytosine (C), guanine (G) and thymine (T).
So, the function should accept any sequence of A, C, G, & T, in any order. 
A matches with T, G matches with C. 

Your function should return the complement of the given strand. 

e.g. if given G, A, T, C the output should be C, T, A, G
*/
function encodeDNA1(strand) {
    let DNA = [];
    for (let i = 0; i < strand.length; i+= 1) {
        if (strand[i] === "A") DNA.push(strand[i]= "T");
        if (strand[i] === "T") DNA.push(strand[i]= "A");
        if (strand[i] === "C") DNA.push(strand[i]= "G");
        if (strand[i] === "G") DNA.push(strand[i]= "C");
    }
    return DNA;
}
console.log(encodeDNA1("AAATTCCGG"));

/* 13. 
Write a function that takes a shape as a param and returns the area of the shape.
Pass shape as an object, 
e.g. {type: "rectangle", sides: { width: 5, height: 6} }

calculate area based on shape.type and shape.sides or the attribute you define.
Implement the area calculation for a triangle, circle and a square.
*/
let shape = {
        
    type: "rectangle", 
    side: {length: 6, width: 7},
};

let shape1 = {

    type: "triangle", 
    side: {base: 7, height: 8}
};
let shape2 = {
    type: "circle", 
    side: {radius: 5}

};
let shape3 = {
    type: "square", 
    side: {length: 6, width: 7}

};

function areaCalculator(shape) {
    if (shape.type == "rectangle") {
        result = shape.side.length * shape.side.width;
    } else if (shape.type == "triangle") {
        result = shape.side.base * shape.side.height * 0.5;
    } else if (shape.type == "circle") {
        result = Math.PI * shape.side.radius**2;
    } else if (shape.type == "square") {
        result = shape.side.length * shape.side.width;
    } 
    return result;
    
    
}
console.log(areaCalculator(shape3));

/* 14. 
Let's write a program that filters out products that are out of stock.
Write a function that takes an array of products as a parameter. 
The product should be an object with name, price, and stockAmount. 
Add multiple products to the array, with varying stock amount, 
where some of the products have stock amount 0. 

Return the total sum of all the items in stock. 

e.g. if prod-1 has 4 items, prod-2 has 6, prod-3 has 5 => 
total should be 4+6+5=15
*/


let products = [{
    name: "apple",
    price: 990,
    stockAmount: 9,
}, {
    name: "samsung",
    price: 990,
    stockAmount: 7,
}, {
    name: "nokia",
    price: 990,
    stockAmount: 9,
}, {
    name: "asus",
    price: 990,
    stockAmount: 0
}];

function stockChecker(product){
    let outOfStock = [];
    for (let i = 0; i < product.length; i++) {
        if (product[i].stockAmount == 0) {
           outOfStock.push(product[i].name);
        }
    }
    return outOfStock;

}
console.log(stockChecker(products));

// Return the total sum of all the items in stock. 

function SumOfItem(product){
    let sum = 0;
    for (let i = 0; i < product.length; i++) { 
        sum += product[i].stockAmount;
    }
    return sum;
}
console.log(SumOfItem(products));

/* Use the array of products from the previous exercise. 
Write a function that returns the products that are available in stock. 
*/

function stockAvailable(product) {
    let available = [];
    for (let i = 0; i < product.length; i++) {
        if (product[i].stockAmount > 0) {
           available.push(product[i].name);
        }
    }
    return available;
}

console.log(stockAvailable(products));
/* Use the array of products from exercise-14. 
Write a function that takes the products and a product name.
	The function then should return true/false if that product name exists
	in the products array. 
*/

function checkName(product, productName) {
    for (let i = 0; i < product.length; i++) {

        if (product[i].name == productName) {
            return true;
        } 
    }
    return false;


}

console.log(checkName(products, "asus"));

/* Use the array of products from exercise-14. 
Write a function that takes the products and a product name.
	The function then return a product array that doesn't include 
	the product with the given name. 
	(The function deletes the given product name if it exists)
*/

function deleteProduct(product, productName) {
    for (let i = 0; i < product.length; i++) {
        if (product[i].name == productName) {
            delete product[i];

        }
    }
    return console.log(product);

}
deleteProduct(products, "apple");

