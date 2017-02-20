///The simpliest example of class in ts

class Greeter {
  greetings: string;
  constructor(message: string){
    this.greetings = message;
  };
  greet() {
    let greetMessage = "Hello, " + this.greetings;
    console.log(greetMessage);
    return greetMessage;
  };
};
let greeter = new Greeter("World");
greeter.greet();

/// inheritance

class Animal {
  name: string;
  constructor(theName: string){
    this.name = theName;
  }
  move(distance: number = 0){
    console.log(`${this.name} moved only ${distance} meters`);
  }
}
let simpleAnimal = new Animal("Marta");
simpleAnimal.move(20);

class Snake extends Animal {
  constructor(name: string){
    super(name); }
  move(distance = 5){
    console.log("Pshe-pshe-pshe...ssshhhh");
    super.move(distance);
  }

}
let littleSnake = new Snake("Python");
littleSnake.move();

///// read-only properties

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor (theName: string) {
    this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");
/// we cannot do because of readonly for name:   dad.name = "Man with the 3-piece suit";

///getters and setters

let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);    ///because set and get are automatically executed when needed
}

/// abstract classes example

abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log("waiting on one place");
  }
}

///// OOP typescript example of simpliest class

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter: Greeter;
greeter = new Greeter("world");
console.log(greeter.greet());


/*let Greeter = (function(){
  function Greeter(message){
    this.greeting = message;
  }
  Greeter.prototype.greet = function(){
    return "Hello, " + this.greeting;
  };
  return Greeter;
})();
let greeter;
greeter = new Greeter("world");
console.log(greeter.greet());
*/

//using a class as an interface

class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
