import fs from 'fs'


console.log('asaf listen to me')
const num1 = 5
const num2 = 20

console.log(num1*num2)


const data = fs.readFileSync('./example.txt', 'utf8')
console.log(data)

fs.readFile('./example.txt', 'utf8', (err,data) => {
    if(err) {
        throw err
    }
    console.log(data)
})
const moreWork = () => {
    console.log('hello')
}
moreWork();

const myTodos = JSON.parse(fs.readFileSync('./test.json', 'utf8'))
console.log(myTodos)

const slicedArgvs = process.argv.slice(2)

console.log(slicedArgvs)

const newTodo ={}
slicedArgvs.forEach(arg => {
    const splittedArg = arg.split(':')
    console.log(splittedArg)
    newTodo[splittedArg[0]] = splittedArg[1]
})

console.log(newTodo)
myTodos.push(newTodo)
console.log(myTodos)

fs.writeFileSync('./test.json', JSON.stringify(myTodos))