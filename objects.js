//1. Method (Object Literals)

const person = {
    name: "raju",
    age: 23,
    getData: function () {
        console.log(`My self ${this.name} and I am ${this.age} years old.`)
    }
}

const member = {
    name: "jack",
    age: 23
}

person.getData.apply(member)

function myFunction(name, age) {
    this.name = name,
        this.age = age,
        this.getData = function () {
            console.log(`Hello guys, My self ${this.name} and I am ${this.age} years old.`)
        }
}

const obj1 = new myFunction("raju", 23)
console.log(obj1)
obj1.getData()
obj1.getData.apply(member)