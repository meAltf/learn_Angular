// Define a simple interface
interface Person {
  name: string;
  age: number;
}

// Create a function that uses the interface
function greet(person: Person): string {
  return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
}

// Create an object
const user: Person = { name: "Alice", age: 25 };

// Print the greeting
console.log(greet(user));
