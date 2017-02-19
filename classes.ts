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
