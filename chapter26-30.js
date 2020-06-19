// 1. Write a program that takes a positive integer from user & display the following 
// in your browser.
// a. number 
// b. round off value of the number 
// c.floor value of the number 
// d. ceil value of the number 


/*var num = +prompt("Enter Positive Integer");
var roundof = Math.round(num);
document.write("Number: "+num,"<br>Round off Value: "+roundof,"<br>Floor Value: "+Math.floor(num),"<br>Ciel Value: "+Math.ceil(num));*/




// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
//  a. number 
//  b. round off value of the number
// c. floor value of the number 
// d. ceil value of the number


/*var num = +prompt("Enter Negative Flooting Value: ");
var roundof = Math.round(num);
document.write("Number: "+num,"<br>Round off Value: "+roundof,"<br>Floor Value: "+Math.floor(num),"<br>Ciel Value: "+Math.ceil(num));*/


// 3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5.



/*var val = -4;
var absolute = Math.abs(val);
document.write("The Absolute value of "+val," is "+absolute);*/


// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

/*var dice = Math.floor(Math.random()*100);
document.write("Random Dice Value: "+dice);*/


// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser.


/*var coinflip = Math.floor(Math.random()*2)+1;
document.write("Random Coin Value : "+coinflip);*/


// 6. Write a program that shows a random number between 1 and 100 in your browser.


/*var ran = Math.floor(Math.random()*100)+1;
document.write("Random Number between 1 and 100: "+ran);*/


// 8.Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret number, congratulate the user.



var value = Math.floor(Math.random()*10)+1;
var val = prompt("Enter A Value from 1-10");
var store = value.match(val);
document.write("Congratulation "+store) 
