/** DataType, Type casting
 * https://javascript.info/type-conversions
 * In this file we can discuss Datatype
 * Number
 * string
 * Boolean -true,false
 * string 
 * function
 * Object -->arrays,null
 * undefined
 * BigInt
 * symbol
 * WE USE THE typeof KEYWORD to know the datatypeof the Variable
 */

/*
console.log("hello world!");
let a="srinija",b=10,c=true,arr=[12,3,"srinija",true];
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof arr);
console.log(typeof null); //always null is object datatype
let fun=function(){};
console.log(typeof fun);
let age;
console.log(typeof age); //its gives declared the variable but didn't assign the variable
*/
//Typecasting
//Typecasting indicates the changing its datatype
//from number ->string,boolean

let num=10; //we can use boolean
console.log(typeof num);
//console.log(String(num));
let n=String(num)
console.log ("after casting the number is :",typeof n)

//during typecasting the string->Number we get the NAN
//means not a number

let str="srinija";
console.log("the type is ",typeof str);
let numT=Number(str);
console.log(numT);

//For Numeric conversion 
/**
 * undefined ->NAN
 * null ->0
 * true and false -> 1 and 0
 * string -> remove the Whitespaces (includes spaces, tabs \t, newlines \n etc.)
 *  from the start and end are removed. If the remaining string is empty, the result is 0.
 *  Otherwise, the number is “read” from the string. An error gives NaN.
 */

//Boolean conversion for Numeric and String
let v1=Boolean(1);// true
let v2=Boolean(2); //false
let v3=Boolean("srinija") //true
let v4=Boolean('');// it gives false, 0, null, undefined, NaN, ""	
//try this Boolean('0') //gives the true value