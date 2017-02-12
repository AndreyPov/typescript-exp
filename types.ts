let isDone: boolean = false;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";
color = 'red'; //also supports single quotes as in JS;

let fullName: string = `Bob Marley`;
let age: number = 24;
let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age+1 } years in May`;

let list: number[] = [1,2,3];
let genericList: Array<number> = [1,2,3];

let x: [string, number];
x = ["hello", 10]; //in other way it won't work because of tuple
console.log(x[0].substr(1)); //works for string, but for x[1] won't work
x[4] = "blabla"; //is ok because it's string|number. For example, boolean wouldn't work

enum Color {Red = 1, Green, Blue}; //count them from 1 and add 1 for iteration
let colorName: string = Color[2]; //Color.Green - would return 2;
console.log(colorName);

let notSure: any = 4; // great for working with js
notSure = "maybe a string instead";
notSure = false;
function warnUser(): void {
    console.log("This is my warning message");
}
