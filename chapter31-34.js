// 1. Write a program that displays current date and time in your browser.


/*var today = new Date();
document.write(today);*/


// 2. Write a program that alerts the current month in words. For example December.

/*const month = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
var m = new Date();
alert("Current Month "+month[m.getMonth()]);*/


// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun. 


/*const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var d = new Date();
alert("Today is "+days[d.getDay()]);*/


// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

/*const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var d = new Date();
alert("Today is "+days[d.getDay()]);*/


// 5. Write a program that shows the message “First fifteen days of the month” if the date is 
// less than 16th of the month else shows “Last days of the month”.





// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 
// and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object. 


/*var curent = new Date(); 
var milsecond = curent.getTime();
var mint = curent.getMinutes("January 1,1970");
document.write("Current Date: "+curent,"<br>MilliSecond since midNight , january 1,1970: "+milsecond,"<br>Minutes Since january 1,1970: "+mint);*/


// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 

    /*var hours = new Date().getHours();
    var hours = (hours+24-2)%24; 
    var mid='am';
    if(hours==0){ 
    hours=12;
    }
    else if(hours>12)
    {
    hours=hours%12;
    mid='pm';
    }
    alert ("it's " + hours + mid);*/


    // 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate. 


    /*var d = new Date(" Thu Dec 31, 2020 00:00:00");
    document.write("Later Date: "+d);*/


    // 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
    //  Note: 1st Ramadan was on June 18, 2015.
     


    /*var a = new Date("June 18, 2019");
    var b = a.getDate();

    var diff = a - b;
    document.write(""+diff);*/


    // 10. Write a program that displays in your browser the seconds that elapsed between 
    // the reference date and the beginning of 2015.


    


