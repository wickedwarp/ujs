const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('hello')
    }
}

const john = Object.create(soldier)

// const john = {
//     health: 100
// }

// john.__proto__ = soldier // устаревший формат
// Object.setPrototypeOf(john, soldier)

// console.log(john)
// console.log(john.armor)
john.sayHello()
