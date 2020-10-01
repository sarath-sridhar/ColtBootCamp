// Higher order funtions are functions that return function. In first half we are going to see in how to call them
function sing() {
    console.log("Hello World");
}

//Here I am calling a higher order function but i am not including brackets because i am not going to execute the function
//but the setinterval function is going to execute it
setInterval(sing, 1000);

//In the below example we are writing an anonymous function directly while calling set interval
setInterval(function () {
    console.log("Hello World");
}, 1000);

//In the below example we are wrinting anonymous function using arrow function 
setInterval(() => {
    console.log("Hello World");
}, 1000);
//Higher Order Function example
var arr = ["item1", "item2", "item3"];

Array.prototype.myForEach = function(func){
    for (var i = 0; i < this.length; i++) {
        func(this[i]); //This is a higher order function as it gets function as an arguement
    }
} 

arr.myForEach((singleItem)=>{
   alert(singleItem); 
});


/* 
myForEach(arr, (singleItem) => {
    alert(singleItem);
});

function myForEach(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
} */

//For Each loop example
var A = [];
A.push(1);
A.shift(2);
console.log(A);
A.forEach(function (SingleItem) {
    console.log("\n Item " + SingleItem);
});

var B = [1, 2, 3, 4];
B.forEach(function (SingleItem, I, arr) {//Single item => current item of the array;I => postion of the current item;
    console.log("\n Item in B =" + SingleItem + "; I =" + I + "; arr =" + arr);
});

B.forEach(SingleItem => {
    console.log(SingleItem + " index=> " + i);
});

//Compare two arrays
a1 = ["1", "2", "3"];
a2 = ["1", "2", "3"];
compareTwoArrays(a1, a2);
function compareTwoArrays(a1, a2) {
    let result = true;
    let i = 0;
    a1.forEach((singleItem) => {
        if (a2[i] != singleItem) {
            result = false;
        }
        i++;
    });
    return result
}

//objects
var person ={
    firstName:"Dan",
    lastName:"Philips",
    phone:"8909342343",
    Age:88
}

console.log(person.firstName);
console.log(person["firstName"]);


//Dom Manipulation
//1.Access dom element and change text content
//2.Use the style function to change the style ex.color
(function(){
    var domElement= document.getElementById("mainHeading");
    
    domElement.textContent="Bye World";//gets plain text - dangerous as it overwrites whatever htem is inside the tag into a text
    domElement.innerHTML="Bye World";//gets html content inside
    domElement.style.color="red";
    console.log(domElement.textContent);
}());

//Dom element manipulation colt steele style
//Blue Blinker
var body = document.querySelector("body");
var isBlue = false;
setInterval(()=>{
    if(isBlue){
        body.style.background="white";
        isBlue=false;
    }else if(!isBlue){
        body.style.background="blue";
        isBlue=true;
    }
},1000);
//Differnt types of selectors
function selectElements()
{
    console.log(document.getElementById("mainHeading"));
    console.log(document.getElementsByClassName("header"));
    console.log(document.getElementsByTagName("body")[0]);//select first element as this command fetches a list of items
    console.log(document.querySelector("body"));//fetches first item from the selector
    console.log(document.querySelector("#mainHeading"));//fetches the first item with id
    console.log(document.querySelector(".header"));
    console.log(document.querySelectorAll("body"));
    console.log(document.querySelectorAll("body #header"));//fetches first item inside body that has id as header

}

//Manuplate style using javascript by adding css classes
var body = document.querySelector("body");
body.classList.add("myClass");//add a class
body.classList.remove("myClass");//remove a class
body.classList.toggle("myClass");//roglle a class

//Toggle is like on/off  it says if the class is not there then add it else if it is already there remove it
var body = document.querySelector("body");
var isBlue = false;
setInterval(()=>{
  body.classList.toggle("myClass");
},1000);

var body = document.querySelector("body");
body.getAttribute("style");
body.setAttribute("style","color:red");//set the attribute]
body.getAttribute("style");

var Two_dA=[[A,1],[b,2]];



