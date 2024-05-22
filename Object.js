/**
 * OBJECT CONCEPTS PLAY MAJOR ROLE in Javascript
 * Object are the association of element with key value pair separated by commas
 * A NUll DATATYPE  considered as object
 * denoted by {}
 * as Array are considered as Object because key are index and values are elements/data
 * Object let us do the customized keyName
 */

/**
 * Accessing the Values using '',dot notation
 * Deletion the value from the object
 * Assigning a value or updating a value
 */

/**
 * DIFFERENCE BLW undefined --->data is not defined
 * not Defined ---->variable is not there
 */

//CURD
//C-->CREATE
let obj={
    name:'suga',
    age:24,
    study:"yale",
    single:true,
    stream:'musican',
    friends:['jin','jimin','rin','king'],
    Nationality:'american'
}

obj['company']='label'; //other way to create but come under the update
console.log("the Object with key value pairs",obj)


//R-->Accessing the elements using ''
//always the keyName should enclosed with ['']
console.log("The name of the student is ",obj['name']);

//using the dot notation
console.log("The Stream name is ",obj.stream);

//deletion using the delete keyword
// let a=delete obj.age;
// console.log(obj);
// console.log(a); //here it return the true

let b=delete obj['age'];
console.log(obj);

//UPDATE THE value or creating key:value
// obj['company']='bigHit';
obj['stream']='cyberSecurity';
console.log(obj);
