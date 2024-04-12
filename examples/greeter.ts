class User{
  fullName: string;
  lastName: string;
  firstName: string;

  constructor(fristName: string, lastName:string){
    this.firstName = fristName;
    this.lastName = lastName;
    this.fullName = fristName + " " + lastName;
  }
}

interface Person{
  firstName: string;
  lastName: string
}

function greeter(person: Person){
  return 'hello ' + person.firstName + ' ' + person.lastName;
}

let user = new User('futian', 'ma');

console.log(greeter(user));