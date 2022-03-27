// string is a sequnce of characyters

var str ="hello future ";
        //0,1,2,3,4
console.log(str);

console.log(str[4]);
//strings in js are inmutable
str[4]="x";
console.log(str.length);

//string methods

//1.extraction method

//slice method

// slice(start, end+1)--> start index is inclusive & end index is exclusive



var slicedStr= str.slice(2,7); //start index se shuru hoga aur last index se ek phle tak string katega

console.log(slicedStr);
console.log(str); //original source of information is not changed
var slicedStr= str.slice(6)//start se leke poori end tk string kategi
console.log(slicedStr);
//(2,str.length+(end))-->(2,15+(-4))--->2,15-4 ---> (2,11)

var slicedStr= str.slice(6,-2); // start se leke peeche ke end times chod do

console.log(slicedStr);


//substring method
//substr(star,length); start index se shuru hoga & aage ke kitne characters captur krne h

let ans= str.substr(2,6);
console.log(ans);
console.log(str);


//replacing
str="YOLO";
console.log(str);

console.log(str.toLowerCase);//yolo

str="fomo";
console.log(str.toUpperCase); //FOMO

console.log(str); // info is intact & has not been tampered

//concatenation method---> combine 2 strings & make them one

let firststr= "believe in";
let secondstr = "yourself";

let concatenatedStr= firststr+secondstr;
console.log(concatenatedStr);

// concat method
let concatstr= firststr.concat(secondstr,"and me");
console.log(concatstr);


// trim method--> remove all spaces

let trimstr="                 hello   how r u            ";
console.log(trimstr);
console.log(trimstr.length);

console.log(trimstr.trim());
console.log(trimstr.trim().length);

// read split from leture on 8th march






