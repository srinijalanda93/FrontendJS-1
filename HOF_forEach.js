console.log("HOF concept")
/**
 * HOF AND CALLBACK FUNCTION
 * callback function : A function which passed as an "argument" we call it as CB
 * or during function invoking where we pass a function we call that function as Callback
 * 
 * HOF: higher order function 
 * A function which take a function as parameter and also returns a function 
 * we call those functions as HOF
 * function defination tends to be HOF 
 */

//let create a normal /regular function
 function callme(a){ //callme is HOF
    console.log(typeof a) //here is a is CB
    console.log(a); //function
    a() //function invoking
 }
 //during invoking 
 callme(function (){console.log("srinija is inside the callback function")})

 function callOther(){ //callOther is HOF
    return function (){
        console.log("returning the function");
    }
 }

 console.log(callOther())//return the function defination
 let b=callOther()
 console.log(`this is a function ${b}`);
 b(); //as b is holding a function we call invoke that function

 /**
  * HOF ARRAY 
  * forEach ---> similar to the for loop
  */

 let arr=['srinija',22,'jk',true,67,23];
 /**
  * using for loop we can easily iterate the given array
  * but using forEach make the code efficently
  * POINT TO REMEMBER
  * forEach alway excepts a function as argument (CB)
  * that CB take 3 parameter those are ELEMENT,INDEX,ARRAYLIST
  * internally CB get invoked base on the array length
  * forEach is not a return type.
  * 
  */

 let cb=(element,index,arrayList) =>{
    console.log(element,index,arrayList)
 }
 arr.forEach(cb) //forEach alway take a callback function with 3 parameter

//Customized forEach
 
function myForEach(cb){
    //internally it will run a loop
    for (let i=0;i<arr.length;i++){
        //this cb is function let invoke that cb
        cb(arr[i],i,arr);

    }
}
myForEach(cb);