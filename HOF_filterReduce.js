/**Filter,Reduce,some
 * Filter it is HOF used in array
 * Take cb as argument ,where the cb take 3 parameter(e,i,list)
 * filter used to return an array (different length);
 * returns an empty array
 * Returns an array based on the condition
 * in filter method its needs to returns a Boolean Value.
 */
/**
 * length of the array varies unlike  the original array.
 */

let a=[2,1,3,4,5,7,10];
let ans=a.filter((e,i,list) =>{
    return e%2===0;
    //return true;
})
console.log(ans);

/**
 * Reduce method used to do the summation of the array
 * Reduce methods take 2 parameter (cb,initalValue) at least 1 argument
 * return the compute value
 *  In cb it take 3 parameters ==> Previous,current,index.
 * previous indicate the initalValue 2nd argument of reduce method
 * if it is not passed take the arr[0] so the iteration starts at arr[1];
 * curr==> current element
 * 
 */
/**
 * we can pass any value to inital Value
 * without passing inital value ,iteration alway start at 2nd index;
 * considering the first element index=0 as inital value
 * so the prev=arr[0];
 */
let initalValue=10;
let cb=(prev,curr,index) =>{
    return prev+curr
}
let r=ans.reduce(cb,initalValue);
console.log(r);

let r1=ans.reduce(cb);
console.log(r1);

/**
 * some method used to return the boolean value
 * based on the condition if atleat one value statify the condition 
 * return true or else false
 * Take a callBack function
 */

let u=[2,3,14,18];
//in the above array is used to determine 
let result=u.some((e,i,list) =>{
    let answer=e>=18; //condition
    return answer;
})

console.log(result);

//from the entire Array it contains only the 
//boolean  value it the array contains atleast one true
//returns true or false;

// let newArray=[];
// function mySome(e,i,list){
//     //push the boolen value in the newArray
//     for(let i=0;i<u.length;i++){
//         let boolean=u[i]>=18
//         newArray.push(boolean);
//     }
//     let flag=false;
//     u.forEach((e,i,list) =>{
//         if(e) flag=true;
//     })
//     if(flag) return true;
//     return false;
// }

// console.log()

let newArray = [];

function mySome(callback, context) {
    // Assuming u is defined somewhere in your code
    let u = [16, 21, 25, 10, 30]; // Example array
    
    // Iterate through u and push boolean values into newArray
    for (let i = 0; i < u.length; i++) {
        let boolean = callback(u[i], i, u);
        newArray.push(boolean);
    }

    let flag = false;
    u.forEach((e, i, list) => {
        if (callback(e, i, list)) flag = true;
    });

    return flag;
}

// Example callback function to check if the number is greater than or equal to 18
function checkAge(value) {
    return value >= 18;
}

// Call mySome function with checkAge as the callback
let result = mySome(checkAge);

// Log the result of mySome function
console.log(result); // This will log either true or false based on the condition in checkAge function
