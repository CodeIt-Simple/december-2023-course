// const person = {}

// person.age = 30
// person.name = "almog"
// console.log(person)
// person['physics'] = {}
// person['physics']['weight'] = 90
// console.log(person)

// person.eyeColor = 'brown'
// console.log(person)

// const dog1 = {type:'pudel', color:'red'}
// const dog2 = dog1

// console.log(dog1)
// console.log(dog2)

// dog1.eyeColor = 'gray'

// console.log(dog1)
// console.log(dog2)

// dog2.weight = 30
// console.log(dog1)
// console.log(dog2)

// Object.freeze(dog1)
// dog2.something = 'a'
// console.log(dog1)
// console.log(dog2)

// const person = {
//   name: "almog",
//   greet: function() {
//     console.log(person.name);
//   }
// };

// person.greet();

// const obj2 = {a:1,b:2,c:3, d:1, e:1,f:1, g:2}
// const obj = {key:'something'}
// console.log(obj['key'])
// console.log(obj2['key'])
// const obj3={}
// for(const key in obj2){
//     console.log(obj2.key)
//     console.log(key, obj2[key])
//     if(obj2[key] < 3){
//         obj3[key] = obj2[key]
//     }
// }

// console.log(obj2['a'])
// console.log(obj3)

const arr = ["bread", "milk", "butter"];

arr[8] = "coffee";

console.log(arr);

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}
