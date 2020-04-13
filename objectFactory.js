//When logic to create an object is complicated, Factory method is used
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