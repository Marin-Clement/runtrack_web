const person = {
    name: "John Doe",
    age: 30,
    city: "New York",
  
    biography: function() {
      return `${this.name} is ${this.age} years old and lives in ${this.city}.`;
    }
  };
  
  console.log(person.biography());
  