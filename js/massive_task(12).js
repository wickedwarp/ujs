const someString = 'This is some strange string';

function reverse(str) {
    if (typeof (str) !== 'string') {
        return 'Error'
    }

    return str.split('').reverse().join('')

    // Решение при помощи цикла
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i];
    // }
    // return newStr
}

reverse(someString)

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {

}

availableCurr()