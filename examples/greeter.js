var User = /** @class */ (function () {
    function User(fristName, lastName) {
        this.firstName = fristName;
        this.lastName = lastName;
        this.fullName = fristName + " " + lastName;
    }
    return User;
}());
function greeter(person) {
    return 'hello ' + person.firstName + ' ' + person.lastName;
}
var user = new User('futian', 'ma');
console.log(greeter(user));
