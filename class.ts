class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}
interface Person {
  firstName: string;
  lastName: string;
}
function greeter(person: Person){
  console.log("Hello, " + person.firstName + " " + person.lastName);
}
var user = new Student("Anna", "M.", "Karenina");
greeter(user);
