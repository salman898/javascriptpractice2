// // 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable titled 
// fullName. Greet the user using his full name.

/*var name = prompt("Enter your first Name: ");
var last = prompt("Enter your Last Name: ");
var fullname = name+last;
document.write("Good Afternoon "+fullname);*/

// 2. Write a program to take a user input about his favorite 
// mobile phone model.Find and display the length of user 
// input in your browser.

/*var mobile = prompt("Enter your Favorite mobile phone model.");
var len = mobile.length;
document.write("My Favorite Mobile phone model is: "+mobile);
document.write("<br>The Lenght Of String is: "+len);*/

// 3. Write a program to find the index of letter “n” in the word “Pakistani”
//  and display the result in your browser .

/*var p = "pakistani";
var f = p.indexOf("n");
document.write("String: "+p,"<br>Index of 'n': "+f);*/


// 4. Write a program to find the last index of letter “l” in the word “Hello World” 
// and display the result in your browser.


/*var w = "Hello world";
var f = w.lastIndexOf("l");
document.write("String: "+w,"<br>Index of 'n': "+f);*/


// 5. Write a program to find the character at 3rd index in the word “Pakistani” 
// and display the result in your browser.

/*let wd = "Pakistani";
let f = wd.charAt(3);
document.write("String: "+wd,"<br>Character at 3rd index: "+f);*/


// 6. Repeat Q1 using string concat() method.


/*var name = prompt("Enter your first Name: ");
var last = prompt("Enter your Last Name: ");
var fullname = name.concat(last);
document.write("Good Afternoon "+fullname);*/

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” 
// and display the result in your browser.


/*var str = "Hyderabad";
var res = str.replace("Hyder","Islam");
document.write("City: "+str,"<br>After Replacement: "+res);*/


// 8. Write a program to replace all occurrences of “and” in the string with “&” and 
// display the result in your browser. var message = “Ali and Sami are best friends.
//  They play cricket and football together.”;


/*var message = "Ali and Sami are best friends They play cricket and football together.";
var rep = message.replace(/and/g ,"&");
document.write(rep);*/


// 9. Write a program that converts a string “472” to a number 472.
//  Display the values & types in your browser.

/*var num = 472;
var con = num.toString();
document.write("Value: "+num,"<br>Type: "+typeof(num),"<br>Value: "+con,"<br>Type: "+typeof(con));*/


// 10. Write a program that takes user input. Convert and show the input in capital letters.


/*var val = prompt("Enter any Word in small letters.");
var cap = val.toUpperCase();
document.write("User Input: "+val,"<br>Uppercase: "+cap);*/


// 11. Write a program that takes user input. Convert and show the input in title case.

/*var val = prompt("Enter any Word in small letters.");
var cap = val.titlecase(val);
document.write("User Input: "+val,"<br>Uppercase: "+cap);*/



// 12. Write a program that converts the variable num to string. var num = 35.36 ; 
// Remove the dot to display “3536” display in your browser.

/*var num = 35.36;
var convt = num.toString().replace(".","");
document.write("Number: "+num,"<br>Result: "+convt);*/


// 13. Write a program to take user input and store username in a variable.
//  If the username contains any special symbol among [@ . , !], 
//  prompt the user to enter a valid username.For character codes of [@ .


// var username = prompt("Enter Username: ");
// var 



// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, 
// “patties”] Write a program to enable “search by user input” in an array.
//  After searching, prompt the user whether the given item is found in the 
//  list or not. Note: Perform case insensitive search. Whether the user enters 
//  cookie, Cookie, COOKIE or coOkIE,program should inform about its availability.


// var input = prompt("Welcome To Salman's Bakery. What Do you Want ");
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = input.match(arr);
// document.write(arr+"Is on "+index[arr],search);


// 16. Write a program to convert the following string to an array using 
// string split method. var university = “University of Karachi”;
//  Display the elements of array in your browser.


// var university = "University of Karachi";
// var convert = university.split("");
// document.write(convert);



// 17. Write a program to display the last character of a user input.

/*var name = prompt("Enter Any Character: ");
var last = name.charAt(name.length-1);
document.write("User Input: "+name,"<br>Last Character Of input: "+last);*/


// 18. You have a string “The quick brown fox jumps over the lazy dog”. 
// Write a program to count number of occurrences of word “the” in given string.

/*var sentence = "The quick brown fox jumps over the lazy dog";
var c = sentence.split("the").length - 1
document.write("Text: "+sentence,"<br>There are "+ c +" Occurence(s) of word 'the'");*/





