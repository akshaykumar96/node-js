var buf1 = Buffer.alloc(10);
var buf2 = Buffer.alloc(10, 48); //Fill with zeroes
var buf3 = Buffer.from([65, 66, 67]); // ABC
var buf4 = Buffer.from("test"); 

console.log(`Buffer 1: ${buf1}`);
console.log(`Buffer 2: ${buf2}`);
console.log(`Buffer 3 (converted to ascii): ${buf3}`);
console.log(`Buffer 3 (no conversion): ${buf3.readInt8(1)}`);
console.log(`Buffer 4: ${buf4}`);
console.log(`Buffer 4 to hex: ${buf4.toString("hex")}`);

//Comparing and sorting buffers
const arr1 = Buffer.from("BCDE"); 
const arr2 = Buffer.from("ABCD"); 
const arr = [arr1, arr2]; 
console.log(`Compare and sort ${arr.sort(Buffer.compare)}`);
console.log(arr1.indexOf('E'))
const buf6 = Buffer.alloc(10).fill('Z'); 
console.log(`Length: ${buf6.length}, Contents: ${buf6.toString()}`);
