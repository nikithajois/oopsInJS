class User{
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
    }
    increaseAge(){
        console.log("Increasing the age");
        this.age += 2;
        console.log("New age = " + this.age);
    }
    static firstMethod(){ //static: function of the class and not the object 
        console.log("I am a static method");
    }
}

//Inheritance
class Admin extends User{
    constructor(name, age, email){
        super(name, age, email);
        this.isAdmin = true;
        this.permission = ["AddUser", "DeleteUser"];
    }
    addProject(){
        console.log("New Project is added!");
    }
    
}

const nikki = new User("Nikki", 23, "nikitha.jois31@gmail.com"); //Creating an object constructor way

const smush = new User("Smushy", 1, "smush@shihtzu.com");

const adminUser = new Admin("Ramesh", 15, "ramesh@localhost.com");

nikki.increaseAge();

smush.increaseAge();

//Admin Privilages

adminUser.increaseAge();

adminUser.addProject();

//nikki.firstMethod(); //returns TypeError since staticMethod is not a method of nikki

User.firstMethod(); //outputs "I am a static method"