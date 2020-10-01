/* -Get age
-Get Current year from 
-Calculate YEAR of birth
-Calculate leap years in between birth year and current year
-Calculate Number of days between bith year and current year assuming a year has  365  days
-Add the leap year days to the number od days
 */


var age = prompt("Please enter your age");
var today = new Date();
var CurrentYear = today.getFullYear();

alert("your Age in Days is" + Math.ceil(calculateAgeInDays(age)));

function calculateAgeInDays(){
  return age*365.2425;
}

function IsleapYear(yearinContext){
    if(i%4==0){
        return true
    }
    else{
        return false
    }
}

