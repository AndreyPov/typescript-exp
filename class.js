var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    console.log("Hello, " + person.firstName + " " + person.lastName);
}
var user = new Student("Anna", "M.", "Karenina");
greeter(user);