const username = 'admin';

class Person{
  constructor(public name: string, public age: number){}
}

const person = new Person('Max', 30);

console.log(username, person.name);
