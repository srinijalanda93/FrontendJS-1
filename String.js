/* UTF-16 is a character encoding system
 which uses 16-bit code to encode Unicode characters
 */
//String are Immutable in JS
/**Creation of String
 * Kind of quotes in Javascript
 * single quotes ' '
 * double quotes " "
 * Backtrick ``
 */
/**
 * Backticks, however, allow us to
 * embed any expression into the string,
 *  by wrapping it in ${…}
 */
/**
 * \n -->stands for newLine
 */
/**
 * length property used to count the character+whitespace in the
 * given string
 */
/**Accessing the element in string
 * 1.using Indexing
 * 2. at(indexNumber)
 * 3. negative indexing is allowed in string .at(pos)
 */

let s = `It's been a 
long day without you,
 my friend`;
// s[0],s.at(0) gives the same answer
console.log(s.at(-2));

/**
 * Inbulit methods in String
 * str.toUpperCase()
 * str.toLowerCase()
 *  str.indexOf(substr, pos).
 * str.lastIndexOf(substr, position) the last occurence of the substring
 * str.pos(substr,pos) -->return boolean
 * SUBSTRING methods
 * slice(negative indexing)
 * ,substring(si,ei)/subString(ei,si),substr(si,count)
 */
//str.indexOf(substr,pos) -->found returns 0 or -1
//pos is optional default is 0
/**
 *  If position is greater than the length of the
 * calling string, the method doesn't search the
 * calling string at all. If position is less than zero,
 *  the method behaves as it would if position were 0.
 */

let str=`Just like the day that I met you
The day I thought forever`;
//here day,i multiple
console.log(str.lastIndexOf('day')); //only takes the last "day word"
console.log(str.includes("day",37)); //at pos=37 we have substr day default =0
console.log("srinija".includes('nija',3));

console.log(`the substring methods slice ${'stringfiy'.slice(1,6)}`); //str.slice(si,ei);
console.log(`using substr ${'stringfiy'.substring(1,5)}`)
console.log(`using substr ${'stringfiy'.substring(5,1)}`)
console.log(`using substr ${'stringfiy'.substr(1,7)}`)