//1. Method (Object Literals)

// apply, bind and call methods are used to change this context in methods of objects or constructor function etc.
// (but only for methods to change this context)

//1. apply = It takes that method arguments in array
// syntax
// obj.method.apply(obj,[arg1, arg2, ...])
// const bind_method = obj.method.bind(obj,arg1, arg2, ...) but it returns bind method, 
// we need to call it "bind_method()""
// obj.method.apply(obj,[arg1, arg2, ...])

const person = {
    name: "raju",
    age: 23,
    getData: function () {
        console.log(`My self ${this.name} and I am ${this.age} years old.`)
    }
}


person.getData()

const member = {
    name: "jack",
    age: 23
}

person.getData.apply(member)

// 2. method (function constructor)

function myFunction(name, age) {
    this.name = name,
        this.age = age,
        this.getData = function () {
            console.log(`Hello guys, My self ${this.name} and I am ${this.age} years old.`)
        }
}

const obj1 = new myFunction("zayn", 23)
obj1.getData()

const user = {
    name: "alice",
    age: 23
}

const bind_method = obj1.getData.bind(user)
bind_method()