interface LabelValue {
  label: string;
}
function printLabel(labelObj: LabelValue){
  console.log(labelObj.label);
}

let myObj = {people:10, label: "10 people in this Object"};
printLabel(myObj);

//another variant:
/*
function printLabel(labelObj: {label:string}){
 console.log(labelObj.label);
}
let myObj = {people:8, label: "8 people in this Object"};
printLabel(myObj);
*/

interface SquareConfig {
  color?: string;
  area?: number;
}
function createSquare(config: SquareConfig): { color: string, area: number} {
  let newSquare = {color: "black", area: 100};
  if (config.color){
    newSquare.color = config.color;
  }
  else if (config.area){
    newSquare.area = config.area;
  }
  else if (config.width){
    newSquare.area = config.width*config.width;
  }
  console.log(newSquare);
  return newSquare;
}
let mySquare = new createSquare({color:"red"});

////////////

interface Point {
  readonly x: number;
  readonly y: number;
}
let p: Point = {x:2, y:3}; //after this operation we cannot assign p.x=4;

////////////

let arr: number[] = [2,3,4];
let ro: ReadonlyArray<number> = arr; //after this operation we cannot change ro[];

/////////////

interface CircleConfig {
    color?: string;                //we can add color with string type only or we may not add it at all
    diameter?: number;             //the same situation
    [propName: string]: any;       //there could be any number of other properties with string type
}
/////////////

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    result = result > -1;
    console.log(result);
    return result;
}

mySearch("I have no idea what is in here.", "hat");

///////////////////

interface StringArray {             //add indexes to array
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
console.log(myStr);

////////////////////

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
digital.tick();

//////extending interfaces

interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

//////////////

interface Counter {
    (start: number): string;   ///hybrid type
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    console.log(counter);
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
console.log(c);
