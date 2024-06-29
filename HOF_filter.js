/**
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

