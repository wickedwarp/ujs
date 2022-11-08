let a = 5
b = a

b = b + 5

console.log(a)
console.log(b)

const obj = {
    a: 5,
    b: 1
}

const copy = obj //ссылку передаем
copy.a = 10

console.log(obj)
console.log(copy)

function copyNew(mainObj) {
    let objCopy = {}

    let key
    for (key in mainObj) {
        objCopy[key] = mainObj[key]
    }

    return objCopy
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 4,
        y: 9
    }
}

const newNumbers = copyNew(numbers)
newNumbers.a = 10
newNumbers.c.x = 10

console.log(numbers)
console.log(newNumbers)

const add = {
    d: 13,
    i: 20
}

console.log(Object.assign(numbers, add))
const clone = Object.assign({}, add)

clone.d = 20
// console.log(add)
// console.log(clone)

const oldArr = ['a', 'b', 'c']
const newArr = oldArr.slice(oldArr)

newArr[1] = 'asfgasgsdg'
console.log(oldArr)
console.log(newArr)

const video = ['youtube', 'vimeo', 'noname'],
    blogs = ['wordpress', 'blogger'],
    internet = [...video, ...blogs, 'facebook', 'twitter']

console.log(internet)

function log(a, b, c) {
    console.log(a)
    console.log(b)
    console.log(c)
}

const num = [2, 5, 7]

log(...num)

const array = ['a', 'b']
const copyArray = [...array]

console.log(copyArray)

const q = {
    one: 1,
    two: 2
}

const newQ = {...q}
console.log(newQ)