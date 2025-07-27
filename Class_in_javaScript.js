// TASK 1

// Problem Statement 1: Create a Constructor for a Person
// Write a JavaScript function constructor named Person that takes two parameters, name, and age, and Add a
// method to the prototype to display name and age. Then, create two instances of Person and display their
// names and ages.

function prson(name, age){
    this.name = name;
    this.age = age;
}
prson.prototype.display = function(){
    console.log ("name " + this.name, "age "+ this.age )
}
const p = new prson("raja", 21);
p.display()

// TASK 2

// Problem Statement 2: Implement a Bank Account
// Create a constructor function named BankAccount that initializes a bank account with an initial balance.
// Include methods for depositing and withdrawing money from the account. Write code to demonstrate these
// operations on a bank account object.

    function BankAccount (initial_balance){
        this.initial_balance = initial_balance;
    }
    BankAccount.prototype.deposit = function(amount){
        this.initial_balance += amount
    }
    BankAccount.prototype.withdraw = function(amount){
        if(amount<= this.initial_balance){
            this.initial_balance -= amount
        }
        else{
            console.log("you have not enough found ")
        }
    }
    BankAccount.prototype.showBalance = function(){
        console.log(this.initial_balance + "is your balance")
    }

    const BA = new BankAccount(0);
    
BA.showBalance()
BA.deposit(500)
BA.showBalance()
BA.withdraw(100)
BA.showBalance()

// TASK 3

// Problem Statement 3: Create a Constructor for a Book
// Design a constructor function called Book that takes title and author as parameters. Add a method to the
// prototype of the Book that displays the book's information. Create at least two book instances and display their

// information. 

    function Book(title,author){
        this.title = title;
        this.author = author;
    }
    Book.prototype.display = function() {
        console.log("this Book name is " + this.title + "  written by " + this.author )
    }

const book1 = new Book("The Brave: Param Vir Chakra Stories","Rachna Bisht Rawat")
book1.display();


// TASK 4

// Problem Statement 4: Implement Task 1 using Class.
// Design a JavaScript class called Person with properties for name and age. Implement a method to display the
// person's name and age. Then, create instances of Person and display their information.

class Person {
    #name;
    #age;
    constructor (name,age){
        this.#name = name;
        this.#age = age;
    }
    display(){
        console.log("name is " + this.#name," and age is " + this.#age)
    }
}
const per = new Person("raja",20);
per.display() 

// TASK 5

// Problem Statement 5: Implement a Calculator Class
// Create a class called Calculator that initializes two values value1 and value2 to store numbers. Add methods for
// add, subtract, multiply, and divide. Perform and show operations

class Calculator {
    value1; 
    value2;
    constructor(v1, v2){
        this.value1 = v1;
        this.value2 = v2;
    }
    add(value1,value2){
        this.value1 = value1
        this. value2 = value2
        console.log("The addition of " +this.value1+ " and " + this.value2 + " is " +this.value1+this.value2)
    }
    mul(value1,value2){
        this.value1 = value1
        this.value2 = value2
        console.log("the multiplication of " + value1 + " and " +value2 + " is " + value1*value2)
    }
    div(value1,value2){
        this.value1 = value1
        this.value2 = value2
        console.log("the division of " + value1 + " and " + value2 + " is " + value1/this.value2)
    }
}

const cal = new Calculator(5,5);
cal.add(5,2);
cal.mul(5,5);
cal.div(6,3)

// TASK 6

// Problem Statement 6: Design a Class for a Geometric Shape
// Design a class called Shape that can represent various geometric shapes. Implement subclasses for specific
// shapes like Circle, Rectangle, and RightTriangle. Each subclass should have properties of that shape (e.g..
// Width, height for a rectangle) and methods for calculating the area and perimeter of the shape. Create
// instances of these shapes and calculate their areas and perimeters

class Shape{
    constructor(name){
        this.name = name;
    }
}

class Circle extends Shape{
    constructor(radius){
        super("circle")
        this.radius = radius;
    }
    area(){
        return Math.PI * this.radius * this.radius;
    }
    perimeter(){
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor (width,height){
        super("Rectangle");
        this.width = width;
        this.height = height;
    }
    area (){
        return this.width * this.height;
    }
    perimeter(){
        return 2 * (this.width + this.height);
    }
}
class RightTriangle extends Shape {
    constructor (base,height){
        super("righttriangle");
        this.base = base;
        this.height = height;
    }
    area(){
        return 0.5 * this.base * this.height;
    }
    perimeter(){
        const hypotenuse = Math.sqrt(this.base ** 2 + this.height ** 2);
        return this.base + this.height + hypotenuse;
    }
}
const circle = new Circle(5);
console.log("Area:", circle.area());
console.log("Perimeter:", circle.perimeter());

const rectangle = new Rectangle (5,6);
console.log("Area:", rectangle.area());
console.log("Perimeter:", rectangle.perimeter());

const triangle = new RightTriangle(3, 4);
console.log("Area:", triangle.area());
console.log("Perimeter:", triangle.perimeter());