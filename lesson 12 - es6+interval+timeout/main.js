// function sayHi() {
//     phrase = "Hello";
//     if (false) {
//         var phrase;
//         alert(phrase);
//   }
//   console.log(phrase)
// }

// sayHi();

// // const a = 'hello
// // world'

// const b = `hello
// world`


const arr1=[1,2,3]
const arr2=[4,5,6]
const arr3=['a','b',['c','d']]

const newArr = [arr1,arr2,arr3].flat(2)

console.log(newArr)


const obj = {a:10, b:20, c:30, d:40, e:50}
const {d, c, ...rest} = obj
console.log(d); 
console.log(c); 
console.log(rest); 

const myFunc = (obj, flag) => {
    if(flag){
        const {a,d,g} = obj

    } else{
        const {b,c,e,f} = obj
    }
}


const myObject = {a:1,b:2,c:3,d:4,e:5,f:6,g:7}

myFunc(myObject, true)