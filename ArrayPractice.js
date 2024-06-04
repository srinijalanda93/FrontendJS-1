// //CURD
// //Creation of array
// /**
//  * Significant of push,pop,unshift and shift()
//  * as we know that the above used for array to add and remove 
//  * unshift() ->used to insert in front
//  * shift() ->used to remove in the front
//  * pop() ->used to remove at last
//  * push() ->insert at last
//  * 
//  * among all push ,pop works faster the reason is 
//  * as unshit() is used to insert the element at index 0.
//  * so the elements need to move 1 index left ,so for more element more time consuming
//  * it happens same for the shift();
//  * unlike push(),pop() ->it won't touch the element place 
//  */

// /**
//  * LOOPS
//  * for of
//  * for in
//  * 
//  * for of is used to access the elements in the array
//  * as ARRAYS are the object we can use for in
//  */
// let a=["srinija",23,{clgName:"sfc"},function(){console.log("hello")},'christ'];
// console.log(a[2].clgName);
// console.log(a[3]()) //undefined

// //2nd way to create the Array
// let b=new Array(1,2,3,"anandRao")
// console.log(b);
// //accessing the last element
// console.log(b.length-1); //gives the number
// console.log(b[b.length-1]);//
// //using at keyword
// console.log(b.at(-1)) //
// //above provide the same answer

// b.push('js');
// // console.log(b)
// b.push(...[2,3,4.4])

// /**
//  * An array is a special kind of object. 
//  * The square brackets used to access a
//  *  property arr[0] actually come from
//  *  the object syntax. That’s essentially
//  *  the same as obj[key], where arr is the object,
//  *  while numbers are used as keys.
//  */

// //values;
// for(value of b){
//     console.log(value);
// }
// //based on indexing
// for(index in b){
//     console.log(b[index]);
// }

//== comparsion

let fruits=["banana",'mango','apple'];

let copy=fruits;
copy.push('grapes');

let styles=['Jazz','Blues'];
styles.push('Rock-n-Roll');
for(index in styles){
    //replaces with Classics in middle with odd number
    if(index%2!==0){
        styles[index] ='Classics';
    }
}
styles.shift(); //strip off the frist values of the aaray and show it.
styles.unshift(...['Rap','Reggae']);


//what is the answer

let test=['1',2];
test.push(function(){
    console.log(this);
})
test[test.length-1](); 
//here we are calling the last element which a  method
//later we came to know the importance of this -->by default point to window object
