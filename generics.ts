//the implementation of "echo" without generics
function identify(arg: any): any {
    return arg;
}
//the implemenation of echo using generics
function identity<T>(arg:T): T{
  return arg;
}
//once we created generics "template" we can call it many times and in different ways as well
//let output = identity<string>("myString"); // correct form
let output = identity("myString");

function loggingIdentity<T>(arg: T[]): T[] { //here we have to mention that arg is an array
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
//interface with generics

interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn = identity;

//class with generics
class GenericNumber<T> {
  zeroValue: T;
  add: (x:T,y:T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x,y) {return x+y;};
/// solution for solving the problem with unexpected property
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}
