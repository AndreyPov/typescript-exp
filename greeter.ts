interface Person {
  firstName: string;
  lastName: string;
}

var greeter = function(person: Person){
  return console.log("Hello, " + person.firstName + " " + person.lastName);
}

var user = { firstName: "Anna", lastName: "Karenina" };

greeter(user);
