/**
 * Arrays in Javascript
 * Compared to other Programming language 
 * Arrays in JS categoried under the object Datatype.
 * Arrays are the collection of data (different datatype HETEROGENOUS)
 * Denoted by [] separated by commas
 * follows the Indexing formate from 0 to n-1
 * arr.length (property) gives the Number of elements present in the array
 * OutofBounder,negative indexing --->undefined
 * Nested Indexing are allowed
 * BULIT-IN METHODS
 * ADD ->unshift(front),push(last)
 * REMOVE ->shift(front) ,pop(last) -->returns the deleted values
 * Add and remove anywhere splice(indexno,countNo to delete,element to insert); -->the deleted element in the form of ARRAY
 * count=0 (remove all the element mentioned from that index)
 * 
 * SUBARRAY using slice(si,ei)
 * here si->starting index which is inclusive
 * and ei ->ending indexing which is exclusive.
 * 
 * 
 * QUESTION :REMOVE ALL THE ODD NUMBER WITHOUT CREATE THE NEW ARRAY.
 */

/*

let arr=[12,"srinija",true,[24,25,1],false,100];
console.log(arr);

//arr.length is a property
console.log("the length of the array ",arr.length);

//Accesing the elements from the array using the indexing
console.log("accessing the elements from the array:",arr[4]);

//Accessing the element that doesn't exist in the array -->undefined
console.log("the outOfBoundElement",arr[7])

//Negative Indexing
console.log("the negative indexing",arr[-9]);

// Nested Indexing are allowed forms the matrix

let nested=[24,["sri","nija"],"sfc",25];
console.log("the index at 2 is an arr",nested[1]);
console.log(nested[1][0])

*/

//BULIT-IN FUNCTION OF ARRAY.
/**
 * push() within roundbrace we can pass single value,muliple value separated by commas,any datatype
 * unsfift() applys same as push
 * 
 */

let array=[12,"srinija",true,[24,25,1],false,100];
// console.log("before push ",array)
// array.push("sfc college",'BscHonor')
// console.log("after push",array);

// console.log("before unshift",array);
// array.unshift('89067');
// console.log("after unshift",array);

//POP AND SHIFT ARE RETURNS THE DLETED VALUES
let deletedEle=array.pop()
console.log(deletedEle);

let deletedEle2=array.shift()
console.log(deletedEle2);

//splice() -->add remove parallel

let ai=['srinija',22,25,4.5,true,false];
console.log(ai);
//using splice let remove the elements
/*
let elements=ai.splice(2,2);
//here from indexno=2 we are taking 2 items (count=2)
console.log("the deleted elements are",elements);
*/

//if count=0
let elements=ai.splice(2,0,23,34,56);
//the above one we are not deleting the elements but adding the element at the index number 2
console.log(ai);
//here it will return the empty array
console.log("the deleted elements are",elements);


/**
 * QUESTION:remove all the odd number without creating the new array
 */
let arr=[2,3,45,67,12,78,10,2,45,34];
//in for loop we can leave the third argument empty / omit 

console.log("before",arr);

for(let i=0;i<arr.length;){
    if(arr[i]%2!==0){
        //remove that number
        arr.splice(i,1) //i=index number,1=count of element need to remove
    }else{
        //increment the i
        i++;
    }
}

console.log("after",arr);









