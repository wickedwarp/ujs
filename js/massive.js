//Массивы

const arrTest = [2, 14, 6, 28, 10]
arrTest.pop()
arrTest.push('test')
console.log(arrTest)
arrTest.sort(compareNum)

function compareNum(a, b) {
    return a - b
}


for (let i = 0; i < arrTest.length; i++) {
    console.log(arrTest[i])
}

for (let value of arrTest) {
    console.log(value)
}

arrTest.forEach(function (item, i, arrTest) {
    console.log(`${i}: ${item} внутри массива ${arrTest}`)
})

const arrStr = prompt('', '')
const products = arrStr.split(',')
products.sort()
console.log(products.join(','))

