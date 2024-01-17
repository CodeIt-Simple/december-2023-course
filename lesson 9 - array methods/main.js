
// fruits.forEach(function(fruit, index){
//     console.log(fruit, index)
// })

    

// const doWhateverYouWant = (item, index) => {
//     console.log(item,index)
// }
// fruits.forEach(doWhateverYouWant)

const numbers = [1,2,3,4,5,6,7,8,9]

// const newNumbers = numbers.map(function(number){
//     return number**3+55
// })

// const numbersLength = numbers.length
// numbers[numbersLength] = 10

// console.log(numbers)
// const newLength = numbers.push('shalom')

// console.log(newLength)
// const newLength2 = numbers.unshift('shalom')
// console.log(newLength2)
console.log(numbers)


console.log(numbers.pop())

console.log(numbers)

console.log(numbers.shift())

console.log(numbers)

const fruits = ['apple', 'Orange', 'banana', 'pear', 'peach', 'watermelon', 'melon', 'dragonFrui', 'pineapple'];

const flag = fruits.includes('ORANGE')
let flag2 = false
    fruits.forEach(function(fruit){
        if(fruit.toLowerCase().includes('ORANGE'.toLowerCase())){
            flag2 = true; 
            return
        }
    })
console.log(flag, flag2)

const newArr = fruits.concat(numbers)

console.log(fruits)
console.log(numbers)
console.log(newArr)

const onlyMoreThan4DigitsFruits = fruits.filter(function(fruit,index){
    return fruit.length > 4
})

const onlyStrings = newArr.filter(function(item, index){
    return typeof item === 'string' || item > 5
});

console.log(onlyMoreThan4DigitsFruits)
console.log(onlyStrings)

// let arr1 =  [1,2,34,4,54]
// const arr2 = [3,4,5,6,3,12]

// console.log(arr1 += arr2)

const theOneAndOnlyFruit = fruits.find(function(fruit,index){
    return fruit.length === 10
})

console.log(theOneAndOnlyFruit)
const theOneAndOnlyFruitIndex = fruits.findIndex(function(fruit){
    return fruit.length === 10
})

console.log(theOneAndOnlyFruitIndex)


const elements = ['fire','water','wind','earth']
console.log(elements.join())
console.log(elements.join(''))
console.log(elements.join(' '))
console.log(elements.join(','))
console.log(elements.join(`;`))
console.log(elements.join('&'))
console.log(elements.join('asaf karaso'))
console.log(elements.join('%$#'))

const newString = elements.join('-')

console.log(newString)

console.log(newString.split('-'))


const link = "https://www.google.com/search?q=tteddy+bear&sca_esv=597555770&sxsrf=ACQVn08DhF1HUy3NcyRohVX5GYGwbetezg%3A1704992809958&source=hp&ei=KSCgZYL6N5Ddi-gP07ei0Ac&iflsig=ANes7DEAAAAAZaAuObIfx1oI-Z9qRsLLKoEWmprnXeLJ&ved=0ahUKEwjCsp6W6dWDAxWQ7gIHHdObCHoQ4dUDCAo&uact=5&oq=tteddy+bear&gs_lp=Egdnd3Mtd2l6Igt0dGVkZHkgYmVhcjIKEAAYgAQYChixAzIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEC4YgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCki2IlCaBFjPIHAGeACQAQCYAZoBoAG2EaoBBDAuMTa4AQPIAQD4AQGoAgrCAgcQIxjqAhgnwgIEECMYJ8ICChAjGIAEGIoFGCfCAhEQLhiABBixAxiDARjHARjRA8ICCBAAGIAEGLEDwgILEAAYgAQYsQMYgwHCAg4QLhiABBiKBRixAxiDAcICDhAuGIAEGLEDGMcBGNEDwgIOEAAYgAQYigUYsQMYgwHCAgUQLhiABMICCBAuGIAEGLEDwgILEC4YgAQYsQMYgwHCAgUQABiABMICCxAuGIAEGMcBGK8BwgIIEAAYgAQYywHCAg4QLhiABBjLARjHARivAcICCBAuGIAEGMsBwgILEAAYgAQYigUYsQPCAgsQLhiABBjHARjRA8ICDRAuGIAEGMcBGK8BGArCAg0QLhiABBjHARjRAxgKwgIHECMYsQIYJ8ICDRAuGIAEGAoYsQMYgwHCAg0QLhiABBgKGMcBGK8B&sclient=gws-wiz"

const splittedLink = link.split('?')

console.log(splittedLink)

const queryString = splittedLink[1]

const splittedQueryString = queryString.split('&')

console.log(splittedQueryString)

const queryStringObject = {}

splittedQueryString.forEach(function(item){
    const splittedItem = item.split("=")
    console.log(splittedItem)
    queryStringObject[splittedItem[0]] = splittedItem[1]
})

console.log(queryStringObject)