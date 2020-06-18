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