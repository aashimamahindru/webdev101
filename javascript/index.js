// starting JS--> javascipt
// var let const
// variable decalaration
var a;
// variable intialization

a=10;
console.log(typeof a);
console.log(a);

a="hello";
console.log(typeof a);
console.log(a);

// type of operator-->> tells us type of data stored in variablr

a=true;
console.log(typeof a);
console.log(a);


a=null;
console.log(typeof a);
console.log(a);
//Number
var num = 10;
console.log(num);
var float = 2.4;
console.log(float);

//Boolean
var t = true;
var f = false;
console.log(t);
console.log(f);


// string
// '' , " ", ``
// single quotes, dbl quotes, backticks
var str = `a`;
console.log(typeof str);
str = `how u dng??\ni am fine`
// \n to print in next line
console.log(str);

var b= `hi hope you
are getting it`;
console.log(b);

var num=2569;
console.log(`half of ${num} is ${num/2}`);

// var has problems
// 1> redeclaration is possible
// so let came in use

let l=100;
console.log(l);

// let l=200;(syntax error l lready declared)
// console.log(l);

l=300; 
// (re initilized l)
console.log(l);


//loops in JS
var num = 10;

// for (var i = 0; i < num; i++){
//     if (i % 2 == 0) {
//         console.log("num is even");
//     }
// }
   // 2nd problem with var keyword
    // var keyword is function scoped in case of function else it is global scope 
    // let keyword is block scoped

    let j = 20;
    for (var i = 0; i < num; i++) {
        let j = 20;
        if (i % 2 == 0) {
            let hello = 1000;
            console.log(i);
            console.log(hello); 
        }
        
        console.log("inner"+j);
    }
    console.log("outer "+j);
    console.log(`value of i is " ${i}`);
    console.log(hello); // error dega hello is not defined

    // { 

    //     //this space between opening and closing of curly braces is a block
    // }

//const keyword
const a = 2;
console.log(a);
// na hi redeclare na reinitialize
// const a = 5;
a = 4; //TypeError: Assignment to constant variable. will stop here wont work after here
console.log("hey");




