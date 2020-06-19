// 1. Write a function that displays current date & time in your browser.

/*function cDate(){
    var curentDate = new Date();
    document.write("Current Date And Time: "+curentDate)
}
cDate();*/


// 2. Write a function that takes first & last name and then it greets the user using his full name.

/*function firstnlast(){
    var first = prompt("Enter your First Name: ")
    var last = prompt("Enter Your Last Name: ")
    var fullname = first+last;
    alert("Welcome "+fullname);
}
firstnlast();*/

// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

/*function addition(){
    let a = +prompt("Enter First Number for Addition: ")
    let b = +prompt("Enter Second Number for Addition: ")
    let c = a+b;
    alert("The Sum of Your Numbers is: "+c);
}
addition();*/


// 4. Calculator:  Write a function that takes three arguments num1, num2 & operator & compute the desired operation.
//  Return and show the desired result in your browser. 


/*function calculatr(num1,operatr,num2){
    var num1 = +prompt("Enter Your first Number: ")
    var operatr = prompt("Enter Your Desire Operator (+,-,*,/)")
    var num2 = +prompt("Enter Your Second Number: ")
    if (operatr === "+"){
        alert(num1+num2)
    }
    if (operatr === "-"){
        alert(num1-num2)
    }
    if (operatr === "*"){
        alert(num1*num2)
    }
    if (operatr === "/"){
        alert(num1/num2)
    }else{
        alert("Incorrect Operator")
    }
}
calculatr();*/

// 5. Write a function that squares its argument. 

/*function squr(){
    var val = Math.sqrt(+prompt("Enter Any Number For Square's "))
    var sq = Math.floor(val)
    document.write("Your Square Result: "+sq)

}
squr();*/

// 6. Write a function that computes factorial of a number.

/*function factorial(num){
    if(num == 0 || num == 1){
        return 1;
    }else{
        return num * factorial(num-1);
    }
}
document.write("Factorial of your Number: "+factorial(6));*/

// 7. Write a function that take start and end number as inputs & display counting in your browser.

/*function range() {
    var start = +prompt("Enter start number:")
    var end = +prompt("Enter end number:")
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}
document.write("Numbers From Start and end point: "+range());*/

// 8. Write a nested function that computes hypotenuse of a right angle triangle.  

/*function hypotes(){
    var a = +prompt("Enter Side A")
    var b = +prompt("Enter Side B")
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  } 
document.write("Hypotenuse Result: "+hypotes());*/

/*function area (){
    var length = +prompt("Enter length")
    var width = +prompt("Enter Width")
    return length*width;
}
document.write("The Area of Rectangle: "+area());*/


// 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter 
// of each word of the string in upper case.  

/*function ucase()
{
  var word  = prompt("Enter Any sentence ");
  var array1 = word.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write("The Capatilize Result: "+ucase());*/










