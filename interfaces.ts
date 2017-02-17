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
myArray = ["Bob", "Fred"];           ///extremely

let myStr: string = myArray[0];
console.log(myStr);
