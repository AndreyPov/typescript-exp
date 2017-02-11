var greeter = function (person) {
    return console.log("Hello, " + person.firstName + " " + person.lastName);
};
var user = { firstName: "Anna", lastName: "Karenina" };
greeter(user);
