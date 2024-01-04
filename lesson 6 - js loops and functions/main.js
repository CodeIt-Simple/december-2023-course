// for(let i = 1; i < 21; i++){
//     console.log(i*3)
// }

// for (let i = 1; i < 11; i++) {
//     let row = ''
//   for (let j = 1; j < 11; j++) {
//     row += i*j + '\t'
//   }
//   console.log(row)
// }

// let x = 5;
// while (x > 10) {
//   x--;
//   console.log(x);
// }

// let y = 5;
// do {
//   console.log(y);
// } while (y > 10);


function multi(num1,num2){
    console.log(num1*num2)
}

const multiES6 = (num1, num2) => {
    console.log(num1*num2)
}

function multi2(num1,num2){
   return num1*num2
}

const multi2ES6 = (num1, num2) => {
    return num1*num2
}

multi(6,7)
const answer = multi2(6,6)
console.log(answer)

console.log(multi2(5,8))

const fracNumber = 45.74323779

function getMeFixedNumber(kuku){
    return kuku.toFixed(2)
}

const fixedNumber = getMeFixedNumber(fracNumber)
console.log(fixedNumber)


// console.log(getMeFixedNumber("ahalan"))