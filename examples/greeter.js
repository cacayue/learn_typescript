function greeter(person) {
    return 'hello ' + person.firstName + ' ' + person.lastName;
}
var user = {
    firstName: 'futian',
    lastName: 'Ma'
};
console.log(greeter(user));
