interface Named {
    name: string;
}

let x: Named;
// y's inferred type is { name: string; location: string; }
let y = { name: "Alice", location: "Seattle" };
x = y;

let x = (a:number)=>0;
let y = (b:number, c:string)=>0;

y = x;
console.log(y(23,"dfdf"));//completely ok
//error with: x = y;
