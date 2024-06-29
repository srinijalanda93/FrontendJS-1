/**
 * Map concept  -->Return type
 * It is a HOF 
 * It take a cb function as argument in cb (e,i,list) as parameter
 * But retruns an array same length of the original array
 * CB is responsible to return array
 */

let arr=['srinija',21,9.8,true];
let result=arr.map((e,i,list) =>{
    console.log(e,i,list);
})
console.log(result); //here it return an array of undefined


let r1=arr.map((e,i,list) =>{
    let compute=e*i;
    return compute
   // return e+i;
})
console.log(r1);

/**
 * Map mmethod is used to creates an other array
 * and pushes the computed value into thata array[];
 * finally it retruns the NewArray
 */

//Internal work of the map 
/**
 * step 1: creates an empty array 
 */
let newArr=[];
function myMap(e,i,list){
    for(let i=0;i<arr.length;i++){
        //push the computed arr in newArray
        newArr.push(arr[i]*2);
    }
    //return the final arr
    return newArr;
}
//Problem
/**
 * Construct another array of same length 
 * ,double for even number and triple the
 *  odd values
 * 
 */

let a=[4,3,2,6,9,10,11];
let ans=a.map((e,i,list) =>{
    if(e%2===0){
       return 2*e;
    }
    return 3*e;

    // let final=e%2?2*e:3*e;
    // return final;
})
console.log(ans);