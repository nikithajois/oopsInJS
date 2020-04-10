//Object Literal way of creating an object
var smushy = {
    breed: "shihtzu", //property
    age: 1, //property
    color: "tricolour",
    bark: function(){
        //method
        console.log("bow bow");
    },
    run: function(){
        console.log("I am running");
    },
};

var reo = {
    breed: "husky", //property
    age: 5, //property
    color: "tricolour",
    bark: function(){
        //method
        console.log("bow bow");
    },
    run: function(){
        console.log("I am running");
    },
};

console.log(smushy);
smushy.bark();
smushy.run();