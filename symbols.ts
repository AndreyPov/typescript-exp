let sym1 = Symbol(); //symbol is a new type in es6

let sym2 = Symbol("key");
let sym3 = Symbol("key");

console.log(sym2===sym3); ///Symbols are immutable, and unique.
//can be used like keys
let sym = Symbol();

let obj = {
    [sym]: "value"
};

console.log(obj[sym]); // "value"
