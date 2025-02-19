// 1.Object destructuring
console.log("Object destructuring")
const obj = {
    first_name: "raju",
    last_name: "kunarapu"
}

console.log({ "obj": obj })

const { first_name, last_name } = obj
console.log({ "first_name": first_name })
console.log({ "last_name": last_name })


// 2.Array destructuring
console.log("Arrays destructuring")
const arr = ["mango", "banana", "orange"]
console.log({ "arr": arr })

const [ele1, ele2, ele3] = arr
console.log({ "ele1": ele1 })
console.log({ "ele2": ele2 })
console.log({ "ele3": ele3 })


// 3. Array of objects
console.log("Array of objects destructuring")
const arr_obj = [
    { name: 'raju', age: 22 },
    { name: 'jack', age: 24 },
    { name: 'alice', age: 26 },
]

const [obj1, obj2, obj3] = arr_obj
console.log({ "obj1": obj1 })
console.log({ "obj2": obj2 })
console.log({ "obj3": obj3 })

console.log({ "obj1.name": obj1.name })
console.log({ "obj1.age": obj1.age })

console.log({ "obj2.name": obj2.name })
console.log({ "obj2.age": obj2.age })

console.log({ "obj3.name": obj3.name })
console.log({ "obj3.age": obj3.age })
