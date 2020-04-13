function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
p = new Person("nikki","jois",23,"black");
console.log(p);

//Factory method
function personFactory(first, last, age, eye) {
    return {
        firstName : first,
        lastName : last,
        age : age,
        eyeColor : eye
    }
  }
q = personFactory("nikki","jois",23,"black");
console.log(q);