function g(x){
    let x = 100; //is valid, but if there would be re-assignment - it would be mistake
}

let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

let o = {
  a: "foo",
  b: 12,
  c: "bar"
}
let {a,b} = o;
console.log(a + " " + b); //but adding "c" will provide an error

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr = [0,...arr1,...arr2,7];
console.log(arr);

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
console.log(search);
